import styled from "styled-components";

export const RadCont = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
  padding: 5px 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const RadLabel = styled.div`
  font-size: ${({ theme, type }) =>
    type === "small" ? theme.fontSizes.text : theme.fontSizes.subTitle};
  font-family: ${({ theme, type }) =>
    type === "small" ? theme.fonts.reg : theme.fonts.bold};
  margin-left: 15px;
`;

export const OuterCircle = styled.div`
  width: ${({ type }) => (type === "small" ? "0.7rem" : "1.4rem")};
  height: ${({ type }) => (type === "small" ? "0.7rem" : "1.4rem")};
  display: flex;
  border-radius: 50%;
  border: 3px solid;
`;

export const InnerCircle = styled.div`
  transition: all 0.2s;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondBackgrCol};
  width: ${({ checked }) => (checked ? "60%" : 0)};
  height: ${({ checked }) => (checked ? "60%" : 0)};
`;
