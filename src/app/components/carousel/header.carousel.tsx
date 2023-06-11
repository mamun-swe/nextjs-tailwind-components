"use client";
import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HeaderCarousel: React.FC = (): JSX.Element => {
  const heightStyleClass = "h-[240px] md:h-[400px] lg:h-[480px] 2xl:h-[600px]";
  const arrowButtonClass =
    "transition-all bg-[#0000006e] hover:bg-black text-white p-1 rounded-full";
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
  };

  return (
    <div className={`${heightStyleClass} overflow-hidden rounded-xl`}>
      <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        animationHandler={"fade"}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
              className={arrowButtonClass}
            >
              <RiArrowLeftSLine size={23} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
              className={arrowButtonClass}
            >
              <RiArrowRightSLine size={23} />
            </button>
          )
        }
      >
        <div className={heightStyleClass}>
          <img src="1.jpg" className="min-w-full min-h-full" />
        </div>
        <div className={heightStyleClass}>
          <img src="2.jpg" className="min-w-full min-h-full" />
        </div>
      </Carousel>
    </div>
  );
};
