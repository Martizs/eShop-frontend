import { NotFoundCont, NotFoundSubTitle, NotFoundTitle } from "./style";

export const MessagePage = (props) => (
  <NotFoundCont>
    <NotFoundTitle>{props.title}</NotFoundTitle>
    {props.texts.map((text, index) => (
      <NotFoundSubTitle key={`info-text-${index}`}>{text}</NotFoundSubTitle>
    ))}
  </NotFoundCont>
);
