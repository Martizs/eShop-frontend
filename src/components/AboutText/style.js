import styled from "styled-components";

export const AboutTextNorm = styled.div`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.bold};
  width: 80%;
  text-align: center;
  margin: 0 auto;
  white-space: pre-wrap;

  @media (max-width: 1190px) {
    font-size: ${(props) => props.theme.mdFontSizes.title};
  }

  @media (max-width: 890px) {
    font-size: ${(props) => props.theme.smFontSizes.title};
  }
`;

export const AboutTextOver = styled(AboutTextNorm)`
  display: -webkit-box;
  -webkit-line-clamp: 6;
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
