import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


import { Navigation } from 'swiper/modules';
import Product from './Product';

function Home() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src="https://img.lazcdn.com/us/domino/e9730b24-d42f-4a32-b04f-82d975636013_PK-1976-688.jpg_1200x1200q80.jpg_.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://img.lazcdn.com/us/domino/ef3e75ca-d4e7-4630-a967-f736d07038d7_PK-1976-688.jpg_1200x1200q80.jpg_.webp" alt="" /></SwiperSlide>
      </Swiper>
      <Product/>
    </>
  
  );
}
   

export default Home