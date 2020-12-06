import styled from "styled-components";

export const MainPicWrap = styled.div.attrs((props) => ({
  style: {
    backgroundPosition: `${props.xPerc}% ${props.yPerc}%`,
  },
}))`
  width: 100%;
  margin-bottom: 10px;
  background-image: url(${(props) => props.backgrImg});
  background-repeat: no-repeat;
`;

export const MainPic = styled.img`
  width: 100%;
  margin-bottom: -4px;
  object-fit: cover;
  &:hover {
    opacity: 0;
    @media (max-width: 800px) {
      opacity: 1;
    }
  }
`;
