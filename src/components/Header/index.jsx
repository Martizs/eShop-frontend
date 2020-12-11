import { useContext } from "react";
import { ThemeContext } from "styled-components";
/* components */
import { NavLink } from "components/NavLink";
import { AdminBut } from "components/AdminBut";
import { CartNav } from "./components/CartNav";
import { DropDown } from "components/DropDown";
/* styles */
import { NavContainer } from "styles/NavContainer";
import {
  HeaderContainer,
  IconContainer,
  LoggoCont,
  HeadLanCont,
} from "./style";
/* icons */
import { LoggoComp } from "icons/LoggoComp";
import { Rat2Comp } from "icons/Rat2Comp";
import { MailLogo } from "icons/MailLogo";
import { FBLoggo } from "icons/FBLoggo";
import { InstLogo } from "icons/InstLogo";
/* redux */
import { useDispatch, useSelector } from "react-redux";
import { setLang, setLogin } from "redux_store/general/actions";
/* utils */
import { apiCall } from "utils/apiCalls";
/* consts */
import { langOptions } from "./const";

export const Header = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const currLang = useSelector((state) => state.currLang);
  const dispatch = useDispatch();

  const initLang =
    localStorage.getItem("lang") === "en"
      ? langOptions[0].title
      : langOptions[1].title;

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
          {currLang.chanTxt}
        </NavLink>
        <NavLink to="/ap">{currLang.abTxt}</NavLink>
        <LoggoCont to="/">
          <LoggoComp />
        </LoggoCont>
        <NavLink to="/parduotuve">{currLang.shopTxt}</NavLink>
        <CartNav text={currLang.cartTxt} />
      </NavContainer>
      <IconContainer>
        <NavLink to="/kontaktai">
          <MailLogo />
        </NavLink>
        <NavLink to="https://www.facebook.com/dzhiungles" ext>
          <FBLoggo />
        </NavLink>
        <NavLink to="https://www.instagram.com/dzhiungles" ext>
          <InstLogo />
        </NavLink>
        <HeadLanCont>
          <DropDown
            fontSize="1.3rem"
            items={langOptions}
            initVal={initLang}
            onItemSelect={(lang) => dispatch(setLang(lang.data))}
          />
        </HeadLanCont>
      </IconContainer>
    </HeaderContainer>
  );
};
