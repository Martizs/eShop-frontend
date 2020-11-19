import styled from "styled-components";

export const ProdImg = styled.img`
  width: 95%;
  max-width: 367px;
  margin: auto;
  opacity: ${(props) => (props.opacity !== undefined ? props.opacity : 1)};
  -webkit-transition: opacity 0.3s ease-in-out;
  -moz-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
