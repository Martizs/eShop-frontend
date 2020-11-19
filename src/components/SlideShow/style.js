import styled from "styled-components";
import { ArrowBackIos } from "@material-ui/icons";

export const slidImg = {
  objectFit: "cover",
  width: "100%",
  // height: "500px",
};

export const slidImgCont = {
  width: "100%",
};

export const ArrowContainer = styled.div`
  position: relative;
`;

export const BackArrow = styled(ArrowBackIos)`
  position: absolute;
  font-size: 5rem !important;
  left: 20px;
  color: ${(props) => props.theme.colors.backgrColor};
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;

export const ForwArrow = styled(BackArrow)`
  transform: rotate(180deg);
  left: -100px;
`;
