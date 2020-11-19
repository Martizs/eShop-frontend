import styled from "styled-components";

export const LoggoStyle = styled.svg`
  fill: ${(props) => props.theme.colors.textColor};
  width: 279px;
  &:hover {
    fill: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
