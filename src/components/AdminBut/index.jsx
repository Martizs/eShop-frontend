import { useHistory } from "react-router-dom";
/* styles */
import { AdButStyle, AdButCont } from "./style";

export const AdminBut = (props) => {
  let history = useHistory();

  const mouseDownHandler = (event) => {
    if (props.link) {
      if (event.button === 0) {
        history.push(props.link);
      } else if (event.button === 1) {
        window.open(props.link, "_blank");
      }
    } else {
      if (event.button < 2) {
        props.onClick();
      }
    }
  };

  return (
    <AdButCont butStyle={props.butStyle}>
      <AdButStyle
        butStyle={props.butStyle}
        type={props.type}
        onMouseDown={mouseDownHandler}
      >
        {props.text}
      </AdButStyle>
    </AdButCont>
  );
};
