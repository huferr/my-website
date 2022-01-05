import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #201E1E;
`;

export const Content = styled.main`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: 30px;
  font-size: 80px;
  font-weight: 300;
  color: #fff;
  background: linear-gradient(50deg, #53cadf, #fff385, #ff66b0);
  background-clip: text  !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent  !important;
`;

export const Subtitle = styled.p`
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Button = styled.a`
  width: 170px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const CarouselWrapper = styled.div`
  margin-top: 20px;
`;

export const Project = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectTitle = styled.h1`
  font-weight: 400;
  margin: 0;
`;

export const ProjectVideo = styled.video`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 350px;
  height: auto;
  object-fit: contain;
  box-shadow: #000000 2px 2px 20px 1px; 
`;

export const Projectlanguages = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
`;

export const ProjectPlatform = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  margin-top: 20px;
`;

export const ProjectContent = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  margin-top: 20px;
`;

export const ProjectLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-top: 20px;
`;
