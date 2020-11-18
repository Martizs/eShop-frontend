/* utils */
import { apiCall } from "utils/apiCalls";
/* redux */
import { useDispatch } from "react-redux";
import { setLogin } from "redux_store/general/actions";
import { Link } from "react-router-dom";

export const AdminPage = (props) => {
  const dispatch = useDispatch();

  const logOut = () => {
    apiCall("get", "logOut", null, false, () => dispatch(setLogin(false)));
  };

  return (
    <div>
      <Link to="/">go home</Link>
      <div>welcome to admin page</div>
      <div onClick={logOut}>press me to logout</div>
    </div>
  );
};
