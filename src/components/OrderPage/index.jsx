import { connect } from "react-redux";
import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
/* consts */
import { colWidths } from "./components/ProdTable/const";
/* components */
import { ProdTable } from "./components/ProdTable";
import { SendOpt } from "./components/SendOpt";
import { Button } from "components/Button";
import { PayPalModal } from "components/PayPalModal";
/* styles */
import { MainTitleText } from "styles/MainTitleText";
import {
  CartContainer,
  PriceText,
  CartContWrapper,
  CartBut,
  EmptyCartTxt,
} from "./style";
import { TableCell, TableFooter } from "./components/ProdTable/style";
/* components */
import { LoadingIc } from "components/LoadingIc";
/* utils */
import isEqual from "lodash/isEqual";
import { getItemSum, orderValid } from "./utils";
import { toast } from "react-toastify";
import { apiCall } from "utils/apiCalls";
/* redux */
import { initCart } from "redux_store/cart/actions";
import { initSendOpt, setSendOpt } from "redux_store/send/actions";

class OrderPage extends PureComponent {
  constructor(props) {
    super();

    this.orderData = {
      sendOption: null,
    };

    this.state = {
      wholeSum: 0,
      orderLoading: false,
      openPaypal: false,
    };

    this.setSendOption = this.setSendOption.bind(this);
    this.issueOrder = this.issueOrder.bind(this);
    this.onPayPalClose = this.onPayPalClose.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.cartItems, prevProps.cartItems)) {
      this.setState({
        wholeSum:
          getItemSum(this.props.cartItems) + this.orderData.sendOption.price,
      });
    }
  }

  setSendOption(option, newOpt) {
    if (newOpt) {
      this.setState({
        wholeSum: getItemSum(this.props.cartItems) + option.price,
      });
    }
    this.orderData.sendOption = option;
  }

  async issueOrder() {
    const isValid = orderValid(this.props.cartItems, this.orderData);
    if (isValid !== 1) {
      toast.error(isValid);
    } else {
      this.setState({ orderLoading: true });

      apiCall(
        "post",
        "validateOrder",
        {
          cartItems: this.props.cartItems,
          sendOption: this.orderData.sendOption,
        },
        false,
        () => {
          this.props.dispatch(setSendOpt(this.orderData.sendOption));
          this.setState({ orderLoading: false, openPaypal: true });

          // this.orderData.payedAmount =
          //   getItemSum(this.props.cartItems) + this.orderData.sendOption.price;
        },
        () => {
          toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
          this.props.dispatch(initCart());
          this.props.dispatch(initSendOpt());
        }
      );
    }
  }

  onPayPalClose() {
    this.setState({ openPaypal: false });
  }

  render() {
    const { cartItems } = this.props;

    return (
      <CartContainer>
        <PayPalModal
          open={this.state.openPaypal}
          onClose={this.onPayPalClose}
        />
        <MainTitleText>KREPŠELIS</MainTitleText>
        {cartItems?.length ? (
          <>
            <ProdTable cartItems={cartItems} />
            <MainTitleText>SIUNTIMO BŪDAS</MainTitleText>
            <SendOpt setSendOption={this.setSendOption} />

            <CartContWrapper>
              <TableFooter>
                <TableCell percWidth={colWidths[0]} />
                <TableCell percWidth={colWidths[1]}>
                  <PriceText>VISO</PriceText>
                </TableCell>
                <TableCell percWidth={colWidths[2]} />
                <TableCell percWidth={colWidths[3]} />
                <TableCell percWidth={colWidths[4]} />
                <TableCell percWidth={colWidths[5]} toEnd>
                  <PriceText>{this.state.wholeSum} €</PriceText>
                </TableCell>
              </TableFooter>
            </CartContWrapper>
            <CartBut>
              {this.state.orderLoading ? (
                <LoadingIc />
              ) : (
                <Button text="TĘSTI" onClick={this.issueOrder} />
              )}
            </CartBut>
          </>
        ) : (
          <EmptyCartTxt>KREPŠELIS TUŠČIAS</EmptyCartTxt>
        )}
      </CartContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default withRouter(connect(mapDispatchToProps)(OrderPage));
