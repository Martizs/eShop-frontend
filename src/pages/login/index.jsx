/* styles */
import { LoginLayout, LoginForm } from "./style";
/* utils */
import { apiCall } from "utils/apiCalls";
/* redux */
import { useDispatch } from "react-redux";
import { setLogin } from "redux_store/general/actions";
import { Link } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  let username = null;
  let password = null;

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall("post", "login", { username, password }, false, (data) => {
      if (data.msg === "success") {
        dispatch(setLogin(true));
      }
    });
  };

  return (
    <LoginLayout>
      <Link to="/admin">go to admin</Link>
      <LoginForm>
        <form onSubmit={handleSubmit}>
          <label>
            username:
            <input
              type="text"
              name="username"
              onChange={(event) => (username = event.target.value)}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              onChange={(event) => (password = event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </LoginForm>
    </LoginLayout>
  );
};
