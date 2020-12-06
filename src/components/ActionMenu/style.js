import styled from "styled-components";

export const ActMenCont = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.backgrColor};
  display: flex;
  flex-direction: column;
  width: calc(100% - 8px);
  height: calc(100% - 83px);
  top: 79px;
  left: ${({ open }) => (open ? "0" : "-100%")};
  z-index: 11;
  border: 4px solid ${({ theme }) => theme.colors.highlightCol};
  border-top: 0;
  -webkit-transition: left 0.2s ease-in-out;
  -moz-transition: left 0.2s ease-in-out;
  -o-transition: left 0.2s ease-in-out;
  transition: left 0.2s ease-in-out;
  overflow-y: auto;
`;

export const IconsText = styled.div`
  padding-left: 2%;
`;
