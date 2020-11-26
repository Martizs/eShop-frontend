/* components */
import { TextInput } from "components/TextInput";
import { CheckRad } from "./components/CheckRad";
/* styles */
import { CartContWrapper } from "../../style";
import { PersInfoCont, PersInpRow } from "./style";

export const PersInfo = () => {
  return (
    <PersInfoCont>
      <CartContWrapper>
        <PersInpRow>
          <TextInput
            req
            width="45%"
            label="Vardas, pavardė:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
          <TextInput
            req
            width="45%"
            label="Adresas:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
        </PersInpRow>
        <PersInpRow>
          <TextInput
            req
            width="45%"
            label="El. paštas:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
          <TextInput
            req
            width="45%"
            label="Miestas:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
        </PersInpRow>
        <PersInpRow>
          <TextInput
            req
            width="45%"
            type="tel"
            label="Telefonas:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
          <TextInput
            req
            width="45%"
            label="Pašto kodas:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
        </PersInpRow>
        <PersInpRow>
          <TextInput
            width="45%"
            label="Ekstra informacija:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
          <TextInput
            req
            width="45%"
            label="Šalis:"
            handleChange={(event) =>
              console.log("text input be", event.target.value)
            }
          />
        </PersInpRow>
        <CheckRad
          test
          label="Noriu gauti Dzhiungles naujienlaiškį elektroniniu paštu"
        />
      </CartContWrapper>
    </PersInfoCont>
  );
};
