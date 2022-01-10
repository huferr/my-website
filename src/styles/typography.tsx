import styled from "styled-components";

interface TypographyProps {
  marginTop?: number;
  marginBottom?: number;
  bold?: boolean;
}

export const Heading = styled.h1<TypographyProps>`
  margin: 0;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-size: 96px;
  font-weight: ${(props) => props.bold ? 700 : 300};
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

export const HeadingSmall = styled.h2<TypographyProps>`
  margin: 0;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-size: 80px;
  font-weight: ${(props) => props.bold ? 700 : 300};
  color: #fff;
`;

export const Subtitle = styled.h2<TypographyProps>`
  margin: 0;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const Paragraph = styled.p<TypographyProps>`
  margin: 0;
  margin-top: ${(props) => props.marginTop || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
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
