import styled from "styled-components";
import { ArrowBackIos } from "@material-ui/icons";

export const slidImg = {
  objectFit: "cover",
  width: "100%",
  height: "500px",
};

export const slidImgSmall = {
  objectFit: "contain",
  width: "100%",
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

  @media (max-width: 500px) {
    font-size: 3rem !important;
  }
`;

export const ForwArrow = styled(BackArrow)`
  transform: rotate(180deg);
  left: -100px;
  @media (max-width: 500px) {
    left: -70px;
  }
`;
