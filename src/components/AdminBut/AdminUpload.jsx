/* styles */
import { AdButCont, AdLabStyle } from "./style";

export const AdminUpload = (props) => (
  <AdButCont margin={props.margin}>
    <AdLabStyle
      htmlFor={props.htmlFor}
      butStyle={props.butStyle}
      type={props.type}
    >
      {props.text}
    </AdLabStyle>
  </AdButCont>
);
