import { Link } from "react-router-dom";

import styled from "styled-components";
/* styles */
import { HeadFootCont } from "styles/HeadFootCont";

export const HeaderContainer = styled(HeadFootCont)``;

export const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 25px;
  display: flex;
`;

export const LoggoCont = styled(Link)`
  padding: 0 1%;
`;

export const NavTxtAdj = styled.div`
  min-width: 188px;
  display: flex;
  justify-content: center;
`;

export const HeadLanCont = styled.div`
  padding-left: 10px;
  width: 50px;
  margin-bottom: auto;

  @media (max-width: 930px) {
    width: 30px;
    padding-left: 0;
    padding-right: 10px;
    margin: auto 0;
  }

  @media (max-width: 300px) {
    padding-right: 0;
  }
`;
