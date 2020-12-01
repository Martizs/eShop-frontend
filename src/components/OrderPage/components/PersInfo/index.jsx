/* components */
import { TextInput } from "components/TextInput";
import { CheckRad } from "components/CheckRad";
/* styles */
import { CartContWrapper } from "../../style";
import { PersInfoCont, PersInpRow } from "./style";
import { UserInfAdm } from "./components/UserInfAdm";

export const PersInfo = (props) => {
  return (
    <PersInfoCont>
      {props.admin ? (
        <UserInfAdm orderData={props.orderData} />
      ) : (
        <CartContWrapper>
          <PersInpRow>
            <TextInput
              req
              width="45%"
              label="Vardas, pavardė:"
              handleChange={props.setFullName}
            />
            <TextInput
              req
              width="45%"
              label="Adresas:"
              handleChange={props.setAddress}
            />
          </PersInpRow>
          <PersInpRow>
            <TextInput
              req
              width="45%"
              label="El. paštas:"
              handleChange={props.setEmail}
            />
            <TextInput
              req
              width="45%"
              label="Miestas:"
              handleChange={props.setCity}
            />
          </PersInpRow>
          <PersInpRow>
            <TextInput
              req
              width="45%"
              label="Telefonas:"
              handleChange={props.setPhone}
            />
            <TextInput
              req
              width="45%"
              label="Pašto kodas:"
              handleChange={props.setPostCode}
            />
          </PersInpRow>
          <PersInpRow>
            <TextInput
              width="45%"
              label="Ekstra informacija:"
              handleChange={props.setExtraInfo}
            />
            <TextInput
              req
              width="45%"
              label="Šalis:"
              handleChange={props.setCountry}
            />
          </PersInpRow>
          <CheckRad
            test
            defValue={true}
            label="Noriu gauti Dzhiungles naujienlaiškį elektroniniu paštu"
            setChecked={props.setNewsLetter}
          />
        </CartContWrapper>
      )}
    </PersInfoCont>
  );
};
