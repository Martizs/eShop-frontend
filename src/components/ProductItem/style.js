import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProdItCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgCont = styled(Link)`
  position: relative;
  margin: auto;
  width: 95%;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
  /* max-width: 287px; */
`;

export const ProdImg = styled.img`
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
  &:hover {
    cursor: pointer;
  }
`;

export const ProdImgTop = styled.img`
  position: absolute;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
  left: 10%;
  top: 10%;
  width: 80%;
  opacity: 0;
  z-index: 1;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    cursor: pointer;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

export const NotAvCont = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  padding: 10px 0;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSizes.subTitle};
  font-family: ${(props) => props.theme.fonts.bold};
  background-color: ${(props) => props.theme.colors.secondBackgrCol};
`;

export const ProdTitle = styled.div`
  padding-top: 15px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.subTitle};
  font-family: ${(props) => props.theme.fonts.bold};
  margin: auto;
`;

export const ProdPrice = styled.div`
  padding-top: 5px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.text};
  font-family: ${(props) => props.theme.fonts.reg};
  color: ${(props) => props.theme.colors.highlightCol};
  margin: auto;
`;
