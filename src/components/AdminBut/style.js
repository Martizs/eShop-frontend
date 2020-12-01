import styled from "styled-components";

export const AdButCont = styled.div`
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ butStyle }) => (butStyle === "fit" ? 0 : "0 10px")};
`;

export const AdButStyle = styled.div`
  font-size: ${({ theme, butStyle }) =>
    butStyle === "small" || butStyle === "fit"
      ? theme.fontSizes.text
      : theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  border-radius: 5%;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "edit":
        return theme.colors.editButCol;
      case "add":
        return theme.colors.addButCol;
      case "del":
        return theme.colors.delButCol;
      default:
        return theme.colors.unknownCol;
    }
  }};
  margin: ${({ margin }) => (margin !== undefined ? margin : "10px auto")};
  padding: ${({ butStyle }) => (butStyle === "fit" ? "5px 0" : "5px 30px")};
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const AdLabStyle = styled.label`
  font-size: ${({ theme, butStyle }) =>
    butStyle ? theme.fontSizes.text : theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  border-radius: 10px;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "edit":
        return theme.colors.editButCol;
      case "add":
        return theme.colors.addButCol;
      default:
        return theme.colors.unknownCol;
    }
  }};
  margin: 10px auto;
  padding: 5px 30px;
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
