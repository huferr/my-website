import React, {useState} from "react";
import {ArrowDown} from "../../assets/icons/arrow-down";
import {Link} from "react-scroll";
import {
  Container,
  Content,
  Title,
  Bold,
  Subtitle,
  ButtonsContainer,
  Button,
  BouncyDiv,
} from "./Home.styles";

export const Home: React.FC = () => {
  const [comingSoon, setComingSoon] = useState(false);
  return (
    <Container>
      <Content>
        <Title>Hello!</Title>
        <Title>
          I am
          <Bold> Hugo Ferreira</Bold>
          .
        </Title>
        <Subtitle>
          Front-end Developer, who has a mission to
          build the best and most useful UX/UI in order
          to help bring quality, accessibility and knowledge to our world.
        </Subtitle>
        <ButtonsContainer>
          <Button href="https://github.com/huferr" target="_blank">Github</Button>
          <Button href="https://www.linkedin.com/in/hugo-ferreira-it/" target="_blank">LinkedIn</Button>

          {/* <Link to="Portfolio"
            spy={true}
            smooth={true}
            duration={500}
          > */}
          <Button
            onMouseEnter={() => setComingSoon(true)}
            onMouseLeave={() => setComingSoon(false)}
          >
            {comingSoon ? "Coming Soon" : "Portfolio"}
          </Button>
          {/* </Link> */}
        </ButtonsContainer>
        {/* <Link to="Portfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          <BouncyDiv>
            <ArrowDown />
          </BouncyDiv>
        </Link> */}
      </Content>
    </Container>
  );
};
