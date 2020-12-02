import { AboutTextNorm, AboutTextOver } from "./style";

export const AboutText = (props) => {
  const AboutTextCont = props.overFlow ? AboutTextOver : AboutTextNorm;

  return <AboutTextCont>{props.text}</AboutTextCont>;
};
