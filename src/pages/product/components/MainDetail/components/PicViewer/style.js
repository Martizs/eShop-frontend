import styled from "styled-components";

export const PicViewerCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
`;

export const PicRow = styled.div`
  display: flex;
  flex-wrap: ${({ admin }) => (admin ? "wrap" : "nowrap")};
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ThumbNailCont = styled.div`
  width: ${({ admin }) => (admin ? "30%" : "14%")};
  margin-right: 10px;
`;

export const ThumbNail = styled.img`
  width: 100%;
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.highlightCol : "transparent"};
  &:hover {
    cursor: pointer;
  }
`;
