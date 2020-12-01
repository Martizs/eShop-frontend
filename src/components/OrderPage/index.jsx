import { connect } from "react-redux";
import { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
/* consts */
import { colWidths } from "./components/ProdTable/const";
/* components */
import { ProdTable } from "./components/ProdTable";
import { SendOpt } from "./components/SendOpt";
import { PersInfo } from "./components/PersInfo";
import { Button } from "components/Button";
/* styles */
import { MainTitleText } from "styles/MainTitleText";
import {
  CartContainer,
  PriceText,
  CartContWrapper,
  PersInfoTitle,
  CartBut,
  EmptyCartTxt,
  SendOptAdmTxt,
  SendOptAdmCont,
  SendOptAdmExtra,
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

class OrderPage extends PureComponent {
  constructor(props) {
    super();

    if (props.orderInfo && props.admin) {
      this.orderData = props.orderInfo;
    } else {
      this.orderData = {
        sendOption: null,
        fullName: "",
        address: "",
        email: "",
        city: "",
        phone: "",
        postCode: "",
        extraInfo: "",
        country: "",
        newsLetter: true,
      };
    }

    this.state = {
      wholeSum: props.admin ? props.orderInfo.payedAmount : 0,
      orderLoading: false,
    };

    this.setSendOption = this.setSendOption.bind(this);
    this.issueOrder = this.issueOrder.bind(this);
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
        async () => {
          this.orderData.payedAmount =
            getItemSum(this.props.cartItems) + this.orderData.sendOption.price;
          this.orderData.orderCode = Math.random().toString(36).substr(2, 20);

          apiCall(
            "post",
            "addOrder",
            { cartItems: this.props.cartItems, orderData: this.orderData },
            false,
            async (data) => {
              const stripe = await loadStripe(process.env.STRIPE_PUB_KEY);

              const sessionRes = await stripe.redirectToCheckout({
                sessionId: data.sessionId,
              });

              if (sessionRes.error) {
                // TODO: call backend to remove order here as if it was the
                // cancel order page
                toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
                this.props.dispatch(initCart());
              }
            }
          );
        },
        () => {
          toast.error("Įvyko klaida, pabandykite perkrauti puslapį");
          this.props.dispatch(initCart());
        }
      );
    }
  }

  render() {
    const { cartItems, admin, orderInfo } = this.props;

    const amountPayed = orderInfo?.paymentPending
      ? "AMOUNT TO BE PAYED"
      : "AMOUNT PAYED";

    return (
      <CartContainer>
        {!admin && <MainTitleText>KREPŠELIS</MainTitleText>}
        {cartItems?.length ? (
          <>
            <ProdTable cartItems={cartItems} admin={admin} />
            <MainTitleText>SIUNTIMO BŪDAS</MainTitleText>
            {admin ? (
              <SendOptAdmCont>
                <SendOptAdmTxt>{this.orderData.sendOption.name}</SendOptAdmTxt>
                {this.orderData.sendOption.extraVal && (
                  <SendOptAdmExtra>
                    Extra Info:{"   "}
                    {this.orderData.sendOption.extraVal}
                  </SendOptAdmExtra>
                )}
              </SendOptAdmCont>
            ) : (
              <SendOpt setSendOption={this.setSendOption} />
            )}

            <CartContWrapper>
              <TableFooter>
                <TableCell percWidth={colWidths[0]} />
                <TableCell percWidth={colWidths[1]}>
                  <PriceText red={orderInfo?.paymentPending}>
                    {admin ? amountPayed : "VISO"}
                  </PriceText>
                </TableCell>
                <TableCell percWidth={colWidths[2]} />
                <TableCell percWidth={colWidths[3]} />
                <TableCell percWidth={colWidths[4]} />
                <TableCell percWidth={colWidths[5]} toEnd>
                  <PriceText red={orderInfo?.paymentPending}>
                    {admin ? this.orderData.payedAmount : this.state.wholeSum} €
                  </PriceText>
                </TableCell>
              </TableFooter>
            </CartContWrapper>
            <PersInfoTitle>
              {admin ? "USER INFO" : "ASMENINĖ INFORMACIJA"}
            </PersInfoTitle>

            <PersInfo
              admin={admin}
              orderData={this.orderData}
              setFullName={(event) =>
                (this.orderData.fullName = event.target.value)
              }
              setAddress={(event) =>
                (this.orderData.address = event.target.value)
              }
              setEmail={(event) => (this.orderData.email = event.target.value)}
              setCity={(event) => (this.orderData.city = event.target.value)}
              setPhone={(event) => (this.orderData.phone = event.target.value)}
              setPostCode={(event) =>
                (this.orderData.postCode = event.target.value)
              }
              setExtraInfo={(event) =>
                (this.orderData.extraInfo = event.target.value)
              }
              setCountry={(event) =>
                (this.orderData.country = event.target.value)
              }
              setNewsLetter={(value) => (this.orderData.newsLetter = value)}
            />
            {!admin && (
              <CartBut>
                {this.state.orderLoading ? (
                  <LoadingIc />
                ) : (
                  <Button text="TĘSTI" onClick={this.issueOrder} />
                )}
              </CartBut>
            )}
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
