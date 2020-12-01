import styled from "styled-components";
/* icons */
import { Close } from "@material-ui/icons";

export const ProdTableCont = styled.div``;

export const TableHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackgrCol};
  display: flex;
  padding: 10px 15%;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondBackgrCol};
`;

export const TableFooter = styled.div`
  display: flex;
  padding-top: 30px;
`;

export const TableCell = styled.div`
  display: flex;
  width: ${({ percWidth }) => percWidth}%;
  justify-content: ${({ toEnd, toStart }) => {
    if (toEnd) {
      return "flex-end";
    }

    if (toStart) {
      return "flex-start";
    }

    return "center";
  }};
  align-items: center;
`;

export const ColTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  white-space: nowrap;
`;

export const CellText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  white-space: nowrap;
`;

export const CloseIc = styled(Close)`
  font-size: 2rem !important;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.highlightCol};
  }
`;

export const TableImg = styled.img`
  width: 60%;
`;
