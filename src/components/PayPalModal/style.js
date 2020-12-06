import styled from "styled-components";

export const LoadingCont = styled.div`
  position: relative;
  display: flex;
`;

export const LoadingIcIn = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const LoadingInIn = styled.div`
  margin: auto;
`;
