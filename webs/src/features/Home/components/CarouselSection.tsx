import { Carousel } from "flowbite-react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import csImg from "../../../assets/cs.png";

const CarouselSection = () => {
  const images = [csImg, csImg, csImg, csImg, csImg];

  return (
    <div className="relative w-full h-[500px] md:h-screen">
      <Carousel
        slide={true}
        slideInterval={3000}
        pauseOnHover={true}
        indicators={true}
        leftControl={
          <HiArrowLeft className="h-8 w-8 text-white bg-black/30 rounded-full p-1 hover:bg-black/50 transition" />
        }
        rightControl={
          <HiArrowRight className="h-8 w-8 text-white bg-black/30 rounded-full p-1 hover:bg-black/50 transition" />
        }
        className="w-full h-full rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable="false"
            />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
