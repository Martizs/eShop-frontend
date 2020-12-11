import styled from "styled-components";
import AnimateHeight from "react-animate-height";

export const DDContainer = styled.div`
  position: relative;
`;

export const AbsAnimateHeight = styled(AnimateHeight)`
  position: absolute;
  width: 100%;
  z-index: 12;
`;

export const DDList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  background-color: ${(props) => props.theme.colors.backgrColor};
  border: 2px solid;
  left: 0;
  right: 0;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

export const DDItem = styled.li`
  border-bottom: 2px solid;
  padding: 5px;
  &:last-child {
    border-bottom: 0;
  }
`;

export const DDItemText = styled.div`
  text-decoration: ${({ disabled }) => (disabled ? "line-through" : "none")};
  color: ${({ disabled, theme }) =>
    disabled ? "rgba(255, 255, 255, 0.5)" : theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSizes.subTitle};
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.highlightCol};
  }

  @media (max-width: 930px) {
    font-size: ${(props) =>
      props.fontSize
        ? props.theme.fontSizes.text
        : props.theme.fontSizes.subTitle};
  }
`;
