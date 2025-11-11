import { Carousel } from 'flowbite-react';
import csImg from '../../../assets/cs.png';

function CarouselSection() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000} pauseOnHover>
        <img src={csImg} alt="Slide 1" />
        <img src={csImg} alt="Slide 2" />
        <img src={csImg} alt="Slide 3" />
        <img src={csImg} alt="Slide 4" />
        <img src={csImg} alt="Slide 5" />
      </Carousel>
    </div>
  );
}

export default CarouselSection;
