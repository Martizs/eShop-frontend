import styled from "styled-components";

export const PicViewerCont = styled.div`
  width: 46%;
`;

export const PicRow = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const ThumbNail = styled.img`
  width: 14%;
  border: 2px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.highlightCol : "transparent"};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
