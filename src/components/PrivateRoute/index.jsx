import { Redirect, Route } from "react-router-dom";
/* redux */
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn === false ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
