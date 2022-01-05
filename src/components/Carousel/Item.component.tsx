import React from "react";
import {CarouselItem} from "./Carousel.styles";

interface Itemprops {
    width?: number,
}

export const Item: React.FC<Itemprops> = ({children, width}) => {
  return (
    <CarouselItem style={{width: width}}>
      {children}
    </CarouselItem>
  );
};
