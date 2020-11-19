import styled from "styled-components";

export const HomeCont = styled.div``;

export const AboutWrapper = styled.div`
  margin-top: 30px;
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.secondBackgrCol};
  &:hover {
    cursor: pointer;
  }
`;
