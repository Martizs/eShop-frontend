import { PureComponent } from "react";
/* components */
import { AboutText } from "components/AboutText";
import { TextInput } from "components/TextInput";
import { AdminBut } from "components/AdminBut";
/* styles */
import { MainTitleText } from "styles/MainTitleText";
import { SimpleInput, SimpleTextCont } from "./style";
/* redux */
import { connect } from "react-redux";
/* utils */
import autosize from "autosize";
import { apiCall } from "utils/apiCalls";
import { toast } from "react-toastify";
import { LoadingIc } from "components/LoadingIc";

class SimpleTextPage extends PureComponent {
  constructor(props) {
    super();

    this.text = "";
    this.enText = "";
    this.id = null;

    this.state = {
      text: "",
      enText: "",
      dataLoaded: false,
      uploading: false,
    };

    this.saveText = this.saveText.bind(this);
  }

  componentDidMount() {
    apiCall("get", this.props.getEndpoint, null, false, (data) => {
      const item = data[0];
      if (item) {
        this.setState({
          text: item.text,
          enText: item.enText,
          dataLoaded: true,
        });
        this.text = item.text;
        this.enText = item.enText;
        this.id = item._id;
      } else {
        this.setState({ dataLoaded: true });
      }
    });
  }

  saveText() {
    this.setState({ uploading: true }, () =>
      apiCall(
        "post",
        this.props.saveEndpoint,
        { text: this.text, enText: this.enText, id: this.id },
        true,
        () => {
          toast.success("Text updated!");
          this.setState({ uploading: false });
        }
      )
    );
  }

  render() {
    return (
      <SimpleTextCont>
        <MainTitleText>{this.props.title}</MainTitleText>
        {this.props?.children}
        {this.props.loggedIn ? (
          <SimpleInput>
            {this.state.dataLoaded ? (
              <>
                <TextInput
                  label="LT"
                  textRef={(ref) => autosize(ref)}
                  type="textarea"
                  defaultValue={this.state.text}
                  handleChange={(event) => (this.text = event.target.value)}
                />
                <TextInput
                  label="EN"
                  textRef={(ref) => autosize(ref)}
                  type="textarea"
                  defaultValue={this.state.enText}
                  handleChange={(event) => (this.enText = event.target.value)}
                />
              </>
            ) : (
              <LoadingIc />
            )}

            {this.state.uploading ? (
              <LoadingIc />
            ) : (
              <AdminBut text="SAVE TEXT" type="add" onClick={this.saveText} />
            )}
          </SimpleInput>
        ) : (
          <AboutText
            text={
              this.props.currLang.key === "en"
                ? this.state.enText
                : this.state.text
            }
          />
        )}
      </SimpleTextCont>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  currLang: state.currLang,
});

export default connect(mapStateToProps)(SimpleTextPage);
