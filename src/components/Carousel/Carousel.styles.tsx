import styled from "styled-components";

export const CarouselItem = styled.div`
  display: inline-flex;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Inner = styled.div`
  width: 500px;
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const LeftButton = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RightButton = styled.button`
  outline: none;
  border: 0;
  padding: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EmptyBlock = styled.div`
  width: 30px;
  height: 58px;
`;
