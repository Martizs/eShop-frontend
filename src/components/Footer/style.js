import styled from "styled-components";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";
/* icons */
import { CreditCard } from "@material-ui/icons";

export const FooterCont = styled.div`
  margin-top: auto;
`;

export const FootNavCont = styled(HeadFootCont)`
  padding-top: 70px;
`;

export const PaymentIc = styled(CreditCard)`
  color: ${(props) => props.theme.colors.highlightCol};
  padding: 0 5px;
`;

export const PaymentCont = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;
