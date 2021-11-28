import React, { useState } from "react";
import { Arrow } from "../../assets/arrow";
import { Container, Content, Title, Bold, Subtitle, ButtonsContainer, Button, BouncyDiv } from "./Home.styles";


export const Home: React.FC = () => {
    
      return (
        <Container>
          <Content>
            <Title>Hello!</Title>
            <Title>I am <Bold>Hugo Ferreira</Bold>.</Title>
            <Subtitle>Front-end Developer, who has a mission to 
              build the best and most useful UX/UI for users in order 
              to help bring quality, accessibility and knowledge to our world.
              </Subtitle>
              <ButtonsContainer>
                <Button href="https://github.com/huferr" target="_blank">Github</Button>
                <Button href="https://www.linkedin.com/in/hugo-ferreira-it/" target="_blank">LinkedIn</Button>
                <Button>Portfolio</Button>
              </ButtonsContainer>
              
          </Content>
          <BouncyDiv>
                <Arrow />
              </BouncyDiv>
        </Container>
      )
    }