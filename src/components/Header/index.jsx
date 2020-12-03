/* components */
import { NavLink } from "components/NavLink";
import { AdminBut } from "components/AdminBut";
import { CartNav } from "./components/CartNav";
/* styles */
import { NavContainer } from "styles/NavContainer";
import {
  HeaderContainer,
  IconContainer,
  FBButton,
  InstaButton,
  LoggoCont,
  EmailBut,
} from "./style";
/* icons */
import { LoggoComp } from "icons/LoggoComp";
import { Rat2Comp } from "icons/Rat2Comp";
/* redux */
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "redux_store/general/actions";
/* utils */
import { apiCall } from "utils/apiCalls";

export const Header = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      {loggedIn ? (
        <AdminBut
          text="LOG OUT"
          onClick={() =>
            apiCall("get", "logOut", null, false, () =>
              dispatch(setLogin(false))
            )
          }
        />
      ) : (
        <Rat2Comp />
      )}

      <NavContainer>
        <NavLink
          to="https://www.youtube.com/channel/UCVfhKzY261aiqKnx6UyZ4Gg"
          ext
        >
          KANALAS
        </NavLink>
        <NavLink to="/ap">APIE MUS</NavLink>
        <LoggoCont to="/">
          <LoggoComp />
        </LoggoCont>
        <NavLink to="/parduotuve">PARDUOTUVĖ</NavLink>
        <CartNav />
      </NavContainer>
      <IconContainer>
        <NavLink to="/kontaktai">
          <EmailBut />
        </NavLink>
        <NavLink to="https://www.google.com/" ext>
          <FBButton />
        </NavLink>
        <NavLink to="https://www.instagram.com/dzhiungles" ext>
          <InstaButton />
        </NavLink>
      </IconContainer>
    </HeaderContainer>
  );
};
