import { PureComponent } from "react";
import AnimateHeight from "react-animate-height";
/* components */
import { RadioButton } from "components/RadioButton";
import { TextInput } from "components/TextInput";
/* styles */
import { CartContWrapper, PriceText } from "../../style";
import {
  SendCont,
  SendRow,
  PostAdrInp,
  ExtraInfotxt,
  PriceTextCont,
} from "./style";
/* utils */
import { apiCall } from "utils/apiCalls";

export class SendOpt extends PureComponent {
  constructor(props) {
    super();

    this.sendOptData = [];

    this.state = {
      currOpt: null,
      sendOptData: [],
    };

    this.onExtraInfo = this.onExtraInfo.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount() {
    apiCall("get", "getOptions", null, false, (data) => {
      this.sendOptData = data;
      this.setState(
        { sendOptData: data, currOpt: data && data[0] && data[0]._id },
        () => this.props.setSendOption(data[0], true)
      );
    });
  }

  onCheck(index) {
    this.setState({ currOpt: this.sendOptData[index]._id }, () =>
      this.props.setSendOption(this.sendOptData[index], true)
    );
  }

  onExtraInfo(index, value) {
    this.sendOptData[index].extraVal = value;
    this.props.setSendOption(this.sendOptData[index]);
  }

  render() {
    const { currOpt } = this.state;

    return (
      <SendCont>
        <CartContWrapper>
          {this.state.sendOptData.map((option, index) => (
            <div key={option._id}>
              <SendRow>
                <RadioButton
                  onCheck={() => this.onCheck(index)}
                  checked={currOpt === option._id}
                  label={option.name}
                />
                <PriceTextCont>
                  <PriceText>{option.price} €</PriceText>
                </PriceTextCont>
              </SendRow>
              {option.extraInfo && (
                <AnimateHeight
                  duration={300}
                  height={currOpt === option._id ? "auto" : 0}
                >
                  <PostAdrInp>
                    <TextInput
                      width="50%"
                      height="100px"
                      type="textarea"
                      placeholder={option.extraInfo}
                      handleChange={(event) =>
                        this.onExtraInfo(index, event.target.value)
                      }
                    />
                  </PostAdrInp>
                </AnimateHeight>
              )}
            </div>
          ))}
          <ExtraInfotxt>
            Užsisakant siuntas šventiniu arba pandemijos laikotarpiu, siuntos
            gali vėluoti*
          </ExtraInfotxt>
        </CartContWrapper>
      </SendCont>
    );
  }
}
