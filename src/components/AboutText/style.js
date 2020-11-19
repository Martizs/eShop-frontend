import styled from "styled-components";

export const AboutTextNorm = styled.div`
  width: 80%;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  margin: 0 auto;
`;

export const AboutTextOver = styled(AboutTextNorm)`
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// export const AboutTextOver = styled(AboutTextNorm)`
//   position: relative;
//   /* NOTE: height is dependent on fontsize, it should be amount of lines to show*fontsize */
//   height: 16.2rem;
//   overflow: hidden;
//   &:after {
//     content: "";
//     text-align: right;
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 70%;
//     height: 1.8rem;
//     background: linear-gradient(
//       to right,
//       rgba(201, 64, 80, 0),
//       rgba(201, 64, 80, 1) 70%
//     );
//   }
// `;
