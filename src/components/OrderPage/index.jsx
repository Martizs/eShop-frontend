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
import { LoadingIc } from "components/LoadingIc";
import { MobProdTab } from "./components/MobProdTab";
/* styles */
import { MainTitleText } from "styles/MainTitleText";
import {
  CartContainer,
  PriceText,
  CartContWrapper,
  CartBut,
  EmptyCartTxt,
  LoadCont,
} from "./style";
import { TableCell, TableFooter } from "./components/ProdTable/style";

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
      const tempSum =
        getItemSum(this.props.cartItems) + this.orderData.sendOption.price;
      this.setState({
        wholeSum: Math.round((tempSum + Number.EPSILON) * 100) / 100,
      });
    }
  }

  setSendOption(option, newOpt) {
    if (newOpt && option) {
      const tempSum = getItemSum(this.props.cartItems) + option.price;
      this.setState({
        wholeSum: Math.round((tempSum + Number.EPSILON) * 100) / 100,
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
    const { cartItems, currLang } = this.props;

    return (
      <CartContainer>
        <PayPalModal
          open={this.state.openPaypal}
          onClose={this.onPayPalClose}
        />
        <MainTitleText>{currLang.cartTxt}</MainTitleText>
        {cartItems?.length ? (
          <>
            {window.innerWidth > 580 ? (
              <ProdTable cartItems={cartItems} currLang={currLang} />
            ) : (
              <MobProdTab cartItems={cartItems} currLang={currLang} />
            )}

            <MainTitleText>{currLang.sendTxt}</MainTitleText>
            <SendOpt setSendOption={this.setSendOption} currLang={currLang} />

            <CartContWrapper>
              <TableFooter>
                <TableCell percWidth={colWidths[0]} />
                <TableCell percWidth={colWidths[1]}>
                  <PriceText>{currLang.totTxt}</PriceText>
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
                <LoadCont>
                  <LoadingIc />
                </LoadCont>
              ) : (
                <Button text={currLang.contTxt} onClick={this.issueOrder} />
              )}
            </CartBut>
          </>
        ) : (
          <EmptyCartTxt>{currLang.emptCartTxt}</EmptyCartTxt>
        )}
      </CartContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default withRouter(connect(mapDispatchToProps)(OrderPage));
