import styled from "styled-components";

export const ProdItCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgCont = styled.div`
  position: relative;
  margin: auto;
  width: 95%;
  /* max-width: 287px; */
`;

export const ProdImg = styled.img`
  width: 100%;
`;

export const ProdImgTop = styled.img`
  position: absolute;
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

export const ProdTitle = styled.div`
  padding-top: 15px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  margin: auto;
`;

export const ProdPrice = styled.div`
  padding-top: 5px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.subTitle};
  font-family: ${(props) => props.theme.fonts.reg};
  color: ${(props) => props.theme.colors.highlightCol};
  margin: auto;
`;
