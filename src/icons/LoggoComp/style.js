import styled from "styled-components";

export const LoggoStyle = styled.svg`
  fill: ${(props) => props.theme.colors.textColor};
  width: 279px;
  &:hover {
    fill: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }

  @media (max-width: 1310px) {
    width: 180px;
  }

  @media (max-width: 300px) {
    width: 150px;
  }
`;
