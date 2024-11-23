import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const CustomCarousel = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}         /* space between slides */
      slidesPerView={7}         /* Number of slides per view */
      autoplay={{ delay: 2000 }} /* Auto-play functionality */
      loop              /* Enables looping */
      className="w-full h-auto"   /* Tailwind styling for size */
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 10 },  // at 640px width, show 2 slides
        768: { slidesPerView: 4, spaceBetween: 15 },  // at 768px width, show 3 slides
        1024: { slidesPerView: 7, spaceBetween: 20 }, // at 1024px width, show 5 slides
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center bg-[#F6F6F6]">
          <img src={slide.image} alt={slide.alt} className="w-[7vw] object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCarousel;