import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
/* styles */
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";
import { MainContainer } from "styles/MainContainer";
import { MainScrollCont } from "styles/MainScrollCont";
/* pages */
import { Home } from "pages/home";
import { About } from "pages/about";
import { Login } from "pages/login";
import { AdminPage } from "pages/admin";
import { Shop } from "pages/shop";
import { Product } from "pages/product";
/* components */
import { PrivateRoute } from "components/PrivateRoute";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Header />
          <MainScrollCont>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/apie" component={About} />
              <Route exact path="/parduotuve" component={Shop} />
              <Route exact path="/produktas" component={Product} />
              <Route exact path="/admin_login" component={Login} />
              <PrivateRoute exact path="/admin" component={AdminPage} />
            </Switch>
            <Footer />
          </MainScrollCont>
        </MainContainer>
      </ThemeProvider>
    </Router>
  );
}
