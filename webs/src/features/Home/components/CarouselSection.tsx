import { Carousel } from 'flowbite-react';
import csImg from '../../../assets/cs.png';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

function CarouselSection() {
  const images = [csImg, csImg, csImg, csImg, csImg];
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel 
        slideInterval={3000} 
        pauseOnHover
        leftControl={<HiArrowLeft className="h-6 w-6 text-white" />}
        rightControl={<HiArrowRight className="h-6 w-6 text-white" />}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselSection;
