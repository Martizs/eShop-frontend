import React from "react";
import { withRouter } from "react-router-dom";
/* styles */
import { LoginLayout, LoginForm, RowWrap } from "./style";
/* components */
import { TextInput } from "components/TextInput";
import { Button } from "components/Button";
/* utils */
import { apiCall } from "utils/apiCalls";
/* redux */
import { connect } from "react-redux";
import { setLogin } from "redux_store/general/actions";

class Login extends React.PureComponent {
  constructor(props) {
    super();
    this.username = null;
    this.password = null;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn && this.props.loggedIn) {
      this.props.history.push("/parduotuve");
    }
  }

  handleSubmit() {
    apiCall(
      "post",
      "login",
      { username: this.username, password: this.password },
      false,
      (data) => {
        if (data.msg === "success") {
          this.props.dispatch(setLogin(true));
        }
      }
    );
  }

  render() {
    return (
      <LoginLayout>
        <LoginForm>
          <RowWrap>
            <TextInput
              label="username"
              handleChange={(event) => (this.username = event.target.value)}
            />
          </RowWrap>
          <RowWrap>
            <TextInput
              label="password"
              type="password"
              handleChange={(event) => (this.password = event.target.value)}
            />
          </RowWrap>

          <RowWrap>
            <Button text="login" onClick={this.handleSubmit} />
          </RowWrap>
        </LoginForm>
      </LoginLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
