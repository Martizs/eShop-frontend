import { useSelector } from "react-redux";
/* components */
import { NavLink } from "components/NavLink";
/* icons */
import { Rat1Comp } from "icons/Rat1Comp";
import { VisaLoggo } from "icons/VisaLoggo";
import { MasterLogo } from "icons/MasterLogo";
import { PayPalLog } from "icons/PayPalLog";
/* styles */
import { NavContainer } from "styles/NavContainer";
import { FooterCont, PaymentCont, FootNavCont } from "./style";

export const Footer = () => {
  const currLang = useSelector((state) => state.currLang);

  return (
    <FooterCont>
      <FootNavCont>
        <NavContainer>
          <NavLink to="/kontaktai">{currLang.contactsTxt}</NavLink>
          <NavLink to="/info">{currLang.infoTxt}</NavLink>
          <NavLink to="/priv">{currLang.policyTxt}</NavLink>
        </NavContainer>
        <Rat1Comp />
      </FootNavCont>
      <PaymentCont>
        <VisaLoggo />
        <MasterLogo />
        <PayPalLog />
      </PaymentCont>
    </FooterCont>
  );
};
