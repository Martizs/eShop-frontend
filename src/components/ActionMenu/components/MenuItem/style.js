import styled from "styled-components";

export const MenuItemStyle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.highlightCol};
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor};
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
