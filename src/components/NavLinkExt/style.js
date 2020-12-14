import styled from "styled-components";

export const NavLinkExCont = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: none;
  white-space: nowrap;
  margin: auto 0;
  padding: 0 1%;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }

  @media (max-width: 1310px) {
    font-size: ${(props) => props.theme.mdFontSizes.title};
  }

  @media (max-width: 1020px) {
    font-size: ${(props) => props.theme.smFontSizes.title};
  }

  @media (max-width: 300px) {
    padding: 5px;
  }
`;
