import styled from "styled-components";

export const SizeListMainCont = styled.div`
  display: flex;
  flex-direction: column;
  /* border-bottom: 2px solid ${({ theme }) => theme.colors.highlightCol}; */
  padding-bottom: 20px;
`;

export const SizeListCont = styled.div``;

export const SizeItemCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemSizeCont = styled.div`
  margin-top: auto;
`;

export const SizeLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  padding: 5px 0;
`;

export const SizeButCont = styled.div`
  display: flex;
`;

export const SizeRadCont = styled.div`
  margin: auto 0;
`;
