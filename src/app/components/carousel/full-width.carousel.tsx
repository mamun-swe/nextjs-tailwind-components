"use client";
// var Carousel = require("react-responsive-carousel").Carousel;
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const FullWidthCarousel: React.FC = (): JSX.Element => {
  const styleClass = "h-[240px] md:h-[500px]";
  return (
    <div className="h-[500px] overflow-hidden">
      <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        animationHandler={"fade"}

        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div className={styleClass}>
          <img src="1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div className={styleClass}>
          <img src="2.jpg" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
};
