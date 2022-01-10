import React from "react";
import {Carousel} from "../../components/Carousel/Carousel.component";
import {Item} from "../../components/Carousel/Item.component";
import {Projects} from "../../data/projects";
import { HeadingSmall, Subtitle } from "../../styles";
import {
  Container,
  Project,
  ProjectTitle,
  Projectlanguages,
  ProjectContent,
  ProjectPlatform,
  CarouselWrapper,
  ProjectLink,
  ProjectVideo,
} from "./Portfolio.styles";

// id type to create the scroll animation
export interface PortfolioProps {
  id?: string,
 };

export const Portfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <Container id={props.id}>
      <HeadingSmall>Portfolio</HeadingSmall>
      <Subtitle>Check out the projects I have been
        working on and my own projects as well.
      </Subtitle>
      <CarouselWrapper>
        <Carousel>
          {Projects?.map((p) => {
            return (
              <Item key={p.id}>
                <Project>
                  <ProjectTitle>{p.name}</ProjectTitle>
                  <ProjectVideo autoPlay muted loop src={p.video}/>
                  <Projectlanguages>{p.languages}</Projectlanguages>
                  <ProjectPlatform>{p.platform}</ProjectPlatform>
                  <ProjectContent>{p.content}</ProjectContent>
                  <ProjectLink
                    href={p.link}
                    target="_blank"
                  >See more...</ProjectLink>
                </Project>
              </Item>
            );
          })}
        </Carousel>
      </CarouselWrapper>

    </Container>
  );
};
