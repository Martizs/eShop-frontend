import { NotFoundCont, NotFoundSubTitle, NotFoundTitle } from "./style";

export const MessagePage = (props) => (
  <NotFoundCont>
    <NotFoundTitle>{props.title}</NotFoundTitle>
    <NotFoundSubTitle>{props.text}</NotFoundSubTitle>
  </NotFoundCont>
);
