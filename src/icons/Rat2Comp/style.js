import styled from "styled-components";

export const Rat2Style = styled.svg`
  position: absolute;
  fill: ${(props) => props.theme.colors.highlightCol};
  width: 140px;
  transform: scale(-1, 1);
  @media (max-width: 1190px) {
    width: 100px;
  }

  @media (max-width: 890px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
