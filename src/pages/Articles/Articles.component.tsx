import React from "react";
import { HeadingSmall, Subtitle } from "../../styles";
import { Container } from "./Articles.styles";

// id type to create the scroll animation
export interface ArticlesProps {
  id?: string,
 };

export const Articles: React.FC<ArticlesProps> = (props) => {
  return (
    <Container id={props.id}>
      <HeadingSmall>Articles</HeadingSmall>
      <Subtitle>Check out the projects I have been
        working on and my own projects as well.
      </Subtitle>
    </Container>
  );
};
