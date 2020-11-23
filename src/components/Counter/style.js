import styled from "styled-components";

export const CounterCont = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const NumberInp = styled.input`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  border: 2px solid;
  padding: 5px 0;
  text-align: center;
  background: transparent;
  border-color: ${(props) => props.theme.colors.textColor};
  color: ${(props) => props.theme.colors.textColor};
  width: 3rem;
`;

export const ArrowCont = styled.div`
  border: 2px solid;
  border-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArrowDown = styled.div`
  padding: 0 4px;
  &:after {
    content: "▼";
  }
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.highlightCol};
  }
`;
export const ArrowUp = styled(ArrowDown)`
  transform: rotate(180deg);
`;
