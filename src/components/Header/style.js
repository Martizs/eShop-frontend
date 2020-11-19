import styled from "styled-components";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";
/* icons */
import { Facebook, Instagram } from "@material-ui/icons";

export const HeaderContainer = styled(HeadFootCont)``;

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 25px;
  display: flex;
`;

export const FBButton = styled(Facebook)`
  font-size: 2.8rem !important;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;

export const InstaButton = styled(Instagram)`
  font-size: 2.8rem !important;
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;

export const LoggoCont = styled.div`
  width: 279px;
  padding: 0 1%;
`;
