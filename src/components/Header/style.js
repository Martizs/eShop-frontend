import styled from "styled-components";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";
/* icons */
import { Facebook, Instagram } from "@material-ui/icons";

export const HeaderContainer = styled(HeadFootCont)`
  position: sticky;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 25px;
  display: flex;
`;

export const FBButton = styled(Facebook)`
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;

export const InstaButton = styled(Instagram)`
  &:hover {
    color: ${(props) => props.theme.colors.highlightCol};
    cursor: pointer;
  }
`;
