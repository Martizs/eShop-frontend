import styled from "styled-components";

export const Rat1Style = styled.svg`
  position: absolute;
  fill: ${(props) => props.theme.colors.highlightCol};
  width: 100px;
  transform: scale(-1, 1);
  right: 20px;
  bottom: 10px;

  @media (max-width: 1190px) {
    width: 90px;
  }

  @media (max-width: 890px) {
    width: 80px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
