"use client";
import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const TrainingCarousel: React.FC = (): JSX.Element => {
  const heightStyleClass = "h-[350px] md:h-[400px] lg:h-[480px] 2xl:h-[550px]";
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    cursor: "pointer",
    color: "#fff",
  };
  const sliderOverlayClass =
    "absolute top-0 left-0 w-full h-full bg-[#0000009a] grid place-items-center";
  const titleTextClass = "text-xl md:text-3xl lg:text-4xl font-bold text-white";
  const contentTextClass = "text-base text-muted";

  return (
    <div className={`${heightStyleClass} overflow-hidden`}>
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
            >
              <IoIosArrowBack size={28} />
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
            >
              <IoIosArrowForward size={28} />
            </button>
          )
        }
      >
        <div className={`${heightStyleClass} relative`}>
          <img src="1.jpg" className="min-w-full min-h-full" />
          <div className={sliderOverlayClass}>
            <div>
              <p className={titleTextClass}>Hallo</p>
              <p className={contentTextClass}>Hallo content</p>
            </div>
          </div>
        </div>
        <div className={heightStyleClass}>
          <img src="2.jpg" className="min-w-full min-h-full" />
          <div className={sliderOverlayClass}>
            <div>
              <p className={titleTextClass}>Hallo 2</p>
              <p className={contentTextClass}>Hallo content</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
