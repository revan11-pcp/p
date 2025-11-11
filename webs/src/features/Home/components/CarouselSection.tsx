import { Carousel } from "flowbite-react";
import csImg from "../../../assets/cs.png";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const CarouselSection = () => {
  const images = [csImg, csImg, csImg, csImg, csImg];

  return (
    <div className="h-screen w-full">
      <Carousel
        slide={true}
        slideInterval={3000}
        pauseOnHover={true}
        leftControl={<HiArrowLeft className="h-8 w-8 text-white" />}
        rightControl={<HiArrowRight className="h-8 w-8 text-white" />}
        indicators={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
