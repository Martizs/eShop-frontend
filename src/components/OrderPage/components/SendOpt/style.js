import styled from "styled-components";

export const SendCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondBackgrCol};
`;

export const SendRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

export const PostAdrInp = styled.div`
  margin-left: 2.8rem;
`;

export const ExtraInfotxt = styled.div`
  color: ${({ theme }) => theme.colors.highlightCol};
  text-align: end;
`;

export const PriceTextCont = styled.div`
  margin: auto 0;
`;
