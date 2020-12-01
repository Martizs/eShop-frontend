/* styles */
import { CartContWrapper } from "components/OrderPage/style";
import { PersInpRow } from "../../style";
import { UserInfAdmTxt, UserInfAdmLabel } from "./style";

export const UserInfAdm = (props) => {
  const {
    fullName,
    address,
    email,
    city,
    phone,
    postCode,
    extraInfo,
    country,
  } = props.orderData;

  return (
    <CartContWrapper>
      <PersInpRow>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Fullname:</UserInfAdmLabel> {fullName} asld,;lal
          s;d;alsdm l;amsd;lams d;lamsdl; masd;lmas ;lams;dl mas;ldm as;ldmas;l
          dmas;ldm as;ldmas;l mda;sldmas;ldmas;ldm as;ldmas;l mdas;ldmas;ldm
          a;sldm ;l
        </UserInfAdmTxt>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Address:</UserInfAdmLabel> {address}
        </UserInfAdmTxt>
      </PersInpRow>
      <PersInpRow>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Email:</UserInfAdmLabel> {email}
        </UserInfAdmTxt>
        <UserInfAdmTxt>
          <UserInfAdmLabel>City:</UserInfAdmLabel> {city}
        </UserInfAdmTxt>
      </PersInpRow>
      <PersInpRow>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Phone:</UserInfAdmLabel> {phone}
        </UserInfAdmTxt>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Postcode:</UserInfAdmLabel> {postCode}
        </UserInfAdmTxt>
      </PersInpRow>
      <PersInpRow>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Extra info:</UserInfAdmLabel> {extraInfo}
        </UserInfAdmTxt>
        <UserInfAdmTxt>
          <UserInfAdmLabel>Country:</UserInfAdmLabel> {country}
        </UserInfAdmTxt>
      </PersInpRow>
    </CartContWrapper>
  );
};
