import { createGlobalStyle } from "styled-components";
import reg from "../../assets/fonts/Champagne__Limousines.ttf";
import bold from "../../assets/fonts/Champagne__Limousines_Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.backgrColor};
    color: ${(props) => props.theme.colors.textColor};
    @font-face {
        font-family: champ;
        src: url(${reg});
    }
    @font-face {
        font-family: champ-bold;
        src: url(${bold});
    }
    font-family: champ;
    margin: 0;
  }
`;
