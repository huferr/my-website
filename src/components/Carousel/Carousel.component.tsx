import React, { useState } from 'react';
import { ArrowLeft } from '../../assets/icons/arrow-left';
import { ArrowRight } from '../../assets/icons/arrow-right';
import {
  CarouselContainer,
  ContentWrapper,
  EmptyBlock,
  Inner, LeftButton,
  RightButton,
} from './Carousel.styles';

export const Carousel: React.FC = ({ children }) => {
  const [ activeIndex, setActiveIndex ] = useState<number>(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) -1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <ContentWrapper>

      {activeIndex !== 0 ? (
        <LeftButton
          onClick={() => updateIndex(activeIndex -1)}
        >
          <ArrowLeft />
        </LeftButton>
      ) : <EmptyBlock />}

      <CarouselContainer>

        <Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(children, (child: any, index) => {
            return React.cloneElement(child, { width: '100%' });
          })}
        </Inner>

      </CarouselContainer>

      {activeIndex !== React.Children.count(children) - 1 ? (
        <RightButton
          onClick={() => updateIndex(activeIndex +1)}
        >
          <ArrowRight />
        </RightButton>
      ) : <EmptyBlock />}
    </ContentWrapper>
  );
};
