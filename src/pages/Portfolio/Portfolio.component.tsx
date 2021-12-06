import React from 'react';
import { Carousel } from '../../components/Carousel/Carousel.component';
import { Item } from '../../components/Carousel/Item.component';
import { Projects } from '../../data/projects';
import {
  Container,
  Title,
  Subtitle,
  Project,
  ProjectTitle,
  ProjectImg,
  Projectlanguages,
  ProjectContent,
  ProjectPlatform,
  CarouselWrapper,
  ProjectLink,
} from './Portfolio.styles';
import { PortfolioProps } from './Portfolio.types';


export const Portfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <Container id={props.id}>
      <Title>Portfolio</Title>
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
                  <ProjectImg src={p.image}/>
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
