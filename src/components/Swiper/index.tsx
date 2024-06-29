import { NavLink } from "react-router-dom";
// import data 
import { swiper } from "../../data"
// Import Swiper React components
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PartnersSwiper = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#4CAAAA] mt-16">Partners:</h1>
      <SwiperReact 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        watchSlidesProgress={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper my-16 px-12 h-[120px] max-xl:h-[80px]">
        {
          swiper?.map((item, index)=>(
              <SwiperSlide className='flex items-center justify-center cursor-pointer rounded-xl overflow-hidden bg-[#1E1E20] px-10 py-5'>
                <NavLink key={index} to={item.link} target="_blank">
                  <img src={item.img} alt="" />
                </NavLink>
              </SwiperSlide>
          ))
        }
      </SwiperReact>
    </div>
  );
};

export default PartnersSwiper;
