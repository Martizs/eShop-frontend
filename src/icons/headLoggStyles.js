import styled from "styled-components";

export const HeadLogStyle = styled.svg`
  fill: ${(props) => props.theme.colors.textColor};
  width: 37px;
  padding-left: 8px;



  &:hover {
    fill: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }

  @media (max-width: 1310px) {
    width: 27px;
    height: 27px;
    margin: auto 0;
  }

  @media (max-width: 1020px) {
    width: ${({ big }) => (big ? "27px" : "22px")};
  }
`;
