import styled from "styled-components";

export const MainDetStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14%;
`;

export const MainDetStyleIn = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ProdActCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  @media (max-width: 700px) {
    width: 100%;
    padding-top: 20px;
  }
`;

export const MainDetButCont = styled.div`
  display: flex;
`;
