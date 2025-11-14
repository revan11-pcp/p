import { useState, useEffect } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import truck from "../../../assets/truck.jpg";
import pelabuhan from "../../../assets/pelabuhan.jpeg";
import kontener from "../../../assets/kontener.jpeg"

const CarouselSection = () => {
  const images = [truck,pelabuhan,kontener];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      <button
        onClick={handlePrev}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition`}
      >
        <HiArrowLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition`}
      >
        <HiArrowRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-gray-400/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
