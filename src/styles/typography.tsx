import styled from "styled-components";

// base headings, subtitles and paragraphs
export const Heading = styled.h1`
  margin: 0px;
  font-size: 96px;
  font-weight: 300;
  color: #fff;

  @media only screen and (max-width: 1200px) {
      font-size: 64px;
  };

  @media only screen and (max-width: 765px) {
      font-size: 50px;
  };

  @media only screen and (max-width: 530px) {
      font-size: 30px;
  };
`;

export const Subtitle = styled.h2``;

export const Paragraph = styled.p`
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
  text-align: center;

  @media only screen and (max-width: 1200px) {
      font-size: 15px;
  };

  @media only screen and (max-width: 765px) {
      font-size: 13px;
  };

  @media only screen and (max-width: 425px) {
      font-size: 12px;
  };
`;
