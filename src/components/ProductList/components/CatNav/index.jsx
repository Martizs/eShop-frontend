import { CatNavCont, Divider, CatBut } from "./style";

export const CatNav = (props) => (
  <CatNavCont>
    <Divider />
    <CatBut onClick={() => props.onCatClick("all")}>VISI</CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick("aks")}>AKSESUARAI</CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick("drab")}>DRABUŽIAI</CatBut>
    <Divider />
    <CatBut onClick={() => props.onCatClick("other")}>KITA</CatBut>
    <Divider />
  </CatNavCont>
);
