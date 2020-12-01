import styled from "styled-components";

export const OrderCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingOrdCont = styled.div`
  border-top: 5px solid ${({ theme }) => theme.colors.addButCol};
  border-bottom: 5px solid ${({ theme }) => theme.colors.addButCol};
  padding-bottom: 30px;
`;

export const OrdCodeTxt = styled.div`
  margin: 20px auto;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${({ theme, red }) =>
    red ? theme.colors.secondBackgrCol : theme.colors.textColor};
`;

export const AdmOrdButCont = styled.div`
  display: flex;
`;
