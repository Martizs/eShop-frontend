import styled from "styled-components";

export const TextInpMainCont = styled.div`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;

export const TextAreaCont = styled.textarea`
  background-color: ${({ theme }) => theme.colors.backgrColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  resize: none;
  width: 100%;
  height: 100%;
`;

export const TextInputCont = styled.input`
  background-color: ${({ theme }) => theme.colors.backgrColor};
  border: 2px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  width: 100%;
  height: 100%;
`;

export const InpLabelCont = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

export const InpLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LabelAst = styled(InpLabel)`
  margin-bottom: auto;
  color: ${({ theme }) => theme.colors.secondBackgrCol};
`;
