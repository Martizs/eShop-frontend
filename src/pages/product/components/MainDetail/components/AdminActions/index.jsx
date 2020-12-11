/* components */
import { DropDown } from "components/DropDown";
import { TextInput } from "components/TextInput";
import { SizeList } from "./components/SizeList";
/* styles */
import { ProdActCont } from "../../style";
import { AdInpWraper, CatContainer, CatDDCont, CatLabel } from "./style";
/* consts */
import { prodCategories } from "./const";

export const AdminActions = (props) => (
  <ProdActCont>
    <AdInpWraper>
      <TextInput
        label="LT Title:"
        defaultValue={props.title}
        handleChange={props.titleChange}
      />
      <TextInput
        label="EN Title:"
        defaultValue={props.enTitle}
        handleChange={props.enTitleChange}
      />
    </AdInpWraper>

    <AdInpWraper>
      <TextInput
        defaultValue={props.price}
        label="Price:"
        type="number"
        handleChange={props.priceChange}
      />
    </AdInpWraper>
    <AdInpWraper>
      <TextInput
        defaultValue={props.discPrice}
        label="Discount price:"
        type="number"
        handleChange={props.discChange}
      />
    </AdInpWraper>
    <AdInpWraper>
      <TextInput
        height="200px"
        type="textarea"
        defaultValue={props.desc}
        label="LT Description:"
        handleChange={props.descChange}
      />
      <TextInput
        height="200px"
        type="textarea"
        defaultValue={props.enDesc}
        label="EN Description:"
        handleChange={props.enDescChange}
      />
    </AdInpWraper>
    <CatContainer>
      <CatLabel>Category: </CatLabel>
      <CatDDCont>
        <DropDown
          initVal={props.category?.title}
          items={prodCategories}
          onItemSelect={props.onCatSelect}
        />
      </CatDDCont>
    </CatContainer>
    <SizeList
      setNoSize={props.setNoSize}
      editSize={props.editSize}
      defSizes={props.defSizes}
      addSize={props.addSize}
      remSize={props.remSize}
      setSize={props.setSize}
    />
  </ProdActCont>
);
