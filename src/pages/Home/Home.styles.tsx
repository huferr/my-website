import styled from "styled-components";

interface GradientProp {
    gradient?: number;
}

interface ArrowProps {
    opacity?: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  margin: 0px;
  font-size: 96px;
  font-weight: 300;
  color: #fff;
`;

export const Bold = styled.strong<GradientProp>`
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

export const ArrowBox = styled.div<ArrowProps>`
  opacity: ${props => props.opacity};
`;