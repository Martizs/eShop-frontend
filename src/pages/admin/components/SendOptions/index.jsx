import { PureComponent } from "react";
import { toast } from "react-toastify";
/* components */
import { TextInput } from "components/TextInput";
import { AdminBut } from "components/AdminBut";
import { CheckRad } from "components/CheckRad";
/* styles */
import {
  SendOptionsStyle,
  SendOptionRow,
  OptRemBut,
  SendOptionRowInn,
  ExtraInfoCont,
  ExtraInfoWrap,
} from "./style";
import { MainTitleText } from "styles/MainTitleText";
/* utils */
import remove from "lodash/remove";
import { validateOpts } from "./utils";
import { apiCall } from "utils/apiCalls";
import { LoadingIc } from "components/LoadingIc";

export class SendOptions extends PureComponent {
  constructor(props) {
    super();

    this.actualOptions = [];

    this.state = {
      rendOptions: [],
      dataLoaded: false,
    };

    this.addOption = this.addOption.bind(this);
    this.remOption = this.remOption.bind(this);
    this.createUpdate = this.createUpdate.bind(this);
    this.editName = this.editName.bind(this);
    this.editPrice = this.editPrice.bind(this);
    this.checkExtra = this.checkExtra.bind(this);
    this.editExtra = this.editExtra.bind(this);
  }

  componentDidMount() {
    apiCall("get", "getOptions", null, false, (data) => {
      const adjData = data.map((item) => {
        return {
          ...item,
          price: item.price + "",
        };
      });
      this.setState({ rendOptions: adjData, dataLoaded: true });
      this.actualOptions = adjData;
    });
  }

  addOption() {
    const newRendOpts = [...this.state.rendOptions];

    newRendOpts.push({
      _id: Math.random().toString(36).substr(2, 10),
      new: true,
    });

    this.setState({
      rendOptions: newRendOpts,
    });

    this.actualOptions = newRendOpts;
  }

  remOption(_id) {
    const newRendOpts = [...this.state.rendOptions];

    remove(newRendOpts, (item) => item._id === _id);

    this.setState({
      rendOptions: newRendOpts,
    });

    this.actualOptions = newRendOpts;
  }

  editName(index, value) {
    this.actualOptions[index].name = value;
  }

  editPrice(index, value) {
    this.actualOptions[index].price = value;
  }

  checkExtra(index, value) {
    const newRendOpts = [...this.state.rendOptions];

    newRendOpts[index].extraInfo = value ? "" : null;

    this.setState({
      rendOptions: newRendOpts,
    });

    this.actualOptions = newRendOpts;
  }

  editExtra(index, value) {
    this.actualOptions[index].extraInfo = value;
  }

  createUpdate() {
    const validate = validateOpts(this.actualOptions);

    if (validate !== 1) {
      toast.error(validate);
    } else {
      apiCall(
        "post",
        "optUpdtCreate",
        { sendOptions: JSON.stringify(this.actualOptions) },
        true,
        () => {
          toast.success("Send Options saved");
        }
      );
    }
  }

  render() {
    return (
      <SendOptionsStyle>
        <MainTitleText>MANAGE SEND OPTIONS</MainTitleText>
        <AdminBut text="ADD OPTION" type="add" onClick={this.addOption} />
        {this.state.dataLoaded ? (
          <>
            {this.state.rendOptions.map((rendOpt, index) => (
              <SendOptionRow key={rendOpt._id}>
                <SendOptionRowInn>
                  <TextInput
                    req
                    defaultValue={rendOpt.name}
                    width="40%"
                    label="Label:"
                    handleChange={(event) =>
                      this.editName(index, event.target.value)
                    }
                  />
                  <TextInput
                    req
                    defaultValue={rendOpt.price}
                    width="40%"
                    type="number"
                    label="Price:"
                    handleChange={(event) =>
                      this.editPrice(index, event.target.value)
                    }
                  />
                  <OptRemBut>
                    <AdminBut
                      margin={0}
                      text="REMOVE"
                      type="del"
                      onClick={() => this.remOption(rendOpt._id)}
                    />
                  </OptRemBut>
                </SendOptionRowInn>
                <ExtraInfoCont>
                  <CheckRad
                    padding="10px 0"
                    defValue={
                      rendOpt.extraInfo !== null &&
                      rendOpt.extraInfo !== undefined
                    }
                    label="extraInfo"
                    setChecked={(value) => this.checkExtra(index, value)}
                  />
                  {rendOpt.extraInfo !== null &&
                    rendOpt.extraInfo !== undefined && (
                      <ExtraInfoWrap>
                        <TextInput
                          req
                          defaultValue={rendOpt.extraInfo}
                          placeholder="Enter an extra info placeholder"
                          handleChange={(event) =>
                            this.editExtra(index, event.target.value)
                          }
                        />
                      </ExtraInfoWrap>
                    )}
                </ExtraInfoCont>
              </SendOptionRow>
            ))}
          </>
        ) : (
          <LoadingIc />
        )}
        {!!this.state.rendOptions.length && (
          <AdminBut
            text="SAVE OPTIONS"
            type="add"
            onClick={this.createUpdate}
          />
        )}
      </SendOptionsStyle>
    );
  }
}
