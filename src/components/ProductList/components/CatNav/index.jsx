import { CatNavCont, Divider, CatBut } from "./style";

export const CatNav = (props) => (
  <CatNavCont>
    <Divider />
    <CatBut onClick={() => props.onCatClick(props.items[0].key)}>
      {props.items[0].title}
    </CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick(props.items[1].key)}>
      {props.items[1].title}
    </CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick(props.items[2].key)}>
      {props.items[2].title}
    </CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick(props.items[3].key)}>
      {props.items[3].title}
    </CatBut>
    <Divider />
  </CatNavCont>
);
