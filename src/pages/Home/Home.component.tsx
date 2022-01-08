import React, {useEffect, useState} from "react";
import {ArrowDown} from "../../assets/icons/arrow-down";
import {Link} from "react-scroll";
import {
  Container,
  Content,
  Bold,
  ButtonsContainer,
  Button,
} from "./Home.styles";
import { Heading, Paragraph, Subtitle } from "../../styles";

export const Home: React.FC = () => {
  const [comingSoon, setComingSoon] = useState({
    portfolio: false,
    article: false,
  });
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let counter = 0;
    setInterval(()=>{
      counter++;
      if (counter === 360) counter = 0;
      setDeg(counter);
    }, 15);
  }, []);


  return (
    <Container>
      <Content>
        <Heading>Hello!</Heading>
        <Heading>
          I am
          <Bold deg={deg}> Hugo Ferreira</Bold>
          .
        </Heading>
        <Paragraph>
          Frontend Engineer, who has a mission to
          build the best and most useful UX/UI in order
          to help bring quality, accessibility and knowledge to our world.
        </Paragraph>
        <ButtonsContainer>
          <Button href="https://github.com/huferr" target="_blank">Github</Button>
          <Button href="https://www.linkedin.com/in/hugo-ferreira-it/" target="_blank">LinkedIn</Button>

          {/* <Link to="Portfolio"
            spy={true}
            smooth={true}
            duration={500}
          > */}
          <Button
            onMouseEnter={() => setComingSoon({
              ...comingSoon,
              portfolio: true,
            })}
            onMouseLeave={() => setComingSoon({
              ...comingSoon,
              portfolio: false,
            })}
          >
            {comingSoon.portfolio ? "Coming Soon" : "Portfolio"}
          </Button>
          <Button
            onMouseEnter={() => setComingSoon({
              ...comingSoon,
              article: true,
            })}
            onMouseLeave={() => setComingSoon({
              ...comingSoon,
              article: false,
            })}
          >
            {comingSoon.article ? "Coming Soon" : "Articles"}
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
