// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const Test = () => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img  width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img width="200px" src="https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg" alt="" /></SwiperSlide>

    </Swiper>
  );
};