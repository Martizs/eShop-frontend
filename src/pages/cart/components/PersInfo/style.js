import styled from "styled-components";

export const PersInfoCont = styled.div``;

export const PersInpRow = styled.div`
  display: flex;
  justify-content: ${({ toEnd }) => (toEnd ? "flex-end" : "space-between")};
  padding-bottom: 12px;
`;
