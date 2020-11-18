import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* pages */
import { Home } from "pages/home";
import { About } from "pages/about";
import { Login } from "pages/login";
import { AdminPage } from "pages/admin";
import { useEffect } from "react";
/* components */
import { PrivateRoute } from "components/PrivateRoute";
/* utils */
import { apiCall } from "utils/apiCalls";
/* redux */
import { useDispatch } from "react-redux";
import { setLogin } from "redux_store/general/actions";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // so if a new tab is opened,
    // OR if the page is refreshed
    // this main apps component did mount fires
    // so here we can call the 'isLoggedIn' to check if the
    // user is still in a logged in session and update the redux props
    // accordingly
    apiCall("get", "isLoggedIn", null, true, () => {
      // NOTE: we always set this to true, if there's
      // an error response from the api, the itself 'apiCall'
      // sets the login to be false
      dispatch(setLogin(true));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div>
        {/* TODO: navigation/header goes here */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/admin_login" component={Login} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
}
