import styled from "styled-components";

export const FootLogStyle = styled.svg`
  fill: ${(props) => props.theme.colors.highlightCol};
  width: 80px;
  padding: 0 12px;

  @media (max-width: 1190px) {
    width: 65px;
  }

  @media (max-width: 890px) {
    width: 50px;
  }
`;
