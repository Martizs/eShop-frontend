import styled from "styled-components";
import { Link } from "react-router-dom";
/* icons */
import { Menu } from "@material-ui/icons";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";

export const ActionHeadCont = styled(HeadFootCont)`
  display: flex;
`;

export const MenuBut = styled(Menu)`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.highlightCol};
  }
`;

export const InvBut = styled(MenuBut)`
  visibility: hidden;
  @media (max-width: 300px) {
    font-size: 0 !important;
  }
`;

export const ActHeadLog = styled(Link)`
  margin: 0 auto;
`;
