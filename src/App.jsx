import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
/* styles */
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";
import { MainContainer } from "styles/MainContainer";
import { MainScrollCont } from "styles/MainScrollCont";
/* pages */
import { Home } from "pages/home";
import { About } from "pages/about";
import Login from "pages/login";
import { AdminPage } from "pages/admin";
import { Shop } from "pages/shop";
import { Product } from "pages/product";
import { Ordered } from "pages/ordered";
import { NotFound } from "pages/notFound";
import { Cart } from "pages/cart";
import { Contacts } from "pages/contacts";
import { Info } from "pages/info";
import { Policy } from "pages/policy";
/* components */
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "components/PrivateRoute";
import { Header } from "components/Header";
import { ActionHeader } from "components/ActionHeader";
import { Footer } from "components/Footer";
import { ActionMenu } from "components/ActionMenu";
/* utils */
import { withResizeDetector } from "react-resize-detector";
import { apiCall } from "utils/apiCalls";
/* redux */
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "redux_store/general/actions";
/* css */
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const scrollRef = useRef(null);

  const [mobile, setMobile] = useState(false);

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

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

  useEffect(() => {
    if (props.width <= 800 && !mobile) {
      setMobile(true);
    } else if (props.width > 800 && mobile) {
      setMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.width, props.height]);

  const scrollTop = () => {
    scrollRef.current.scrollTo(0, 0);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={true}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {mobile ? <ActionHeader /> : <Header />}
          {mobile && <ActionMenu open={menu} />}

          <MainScrollCont ref={scrollRef}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/ap" component={About} />
              <Route exact path="/kontaktai" component={Contacts} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/priv" component={Policy} />
              <Route exact path="/parduotuve" component={Shop} />
              <Route
                path="/produktas/:id"
                render={(props) => <Product {...props} scrollTop={scrollTop} />}
              />
              <Route exact path="/krepselis" component={Cart} />
              <Route exact path="/nerasta" component={NotFound} />
              <Route exact path="/uzsakyta" component={Ordered} />
              <Route exact path="/admin_login" component={Login} />
              <PrivateRoute exact path="/admin" component={AdminPage} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </MainScrollCont>
        </MainContainer>
      </ThemeProvider>
    </Router>
  );
}

export default withResizeDetector(App);
