import styled from "styled-components";

export const RadCont = styled.div`
  display: flex;
`;

export const RadLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 15px;
`;

export const OuterCircle = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  display: flex;
  border-radius: 50%;
  border: 3px solid;
  &:hover {
    cursor: pointer;
  }
`;

export const InnerCircle = styled.div`
  transition: all 0.2s;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondBackgrCol};
  width: ${({ checked }) => (checked ? "60%" : 0)};
  height: ${({ checked }) => (checked ? "60%" : 0)};
`;
