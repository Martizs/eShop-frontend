import styled from "styled-components";

export const HeadLogStyle = styled.svg`
  fill: ${(props) => props.theme.colors.textColor};
  width: 37px;
  padding-left: 8px;
  &:hover {
    fill: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }

  @media (max-width: 1190px) {
    width: 27px;
  }

  @media (max-width: 890px) {
    width: ${({ big }) => (big ? "27px" : "22px")};
  }
`;
