import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./swap.css";

// import required modules
import { Pagination } from "swiper/modules";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function Swippers({ carImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {carImages?.map((el) => {
          return (
            <SwiperSlide
              key={el.id}
            >
              <img
                className="rounded-[10px] "
                src={`${import.meta.env.VITE_APP_API_FILES}${el.fileName}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={false}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper my-5"
      >
        {carImages?.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <img
                className="rounded-[4px]"
                src={`${import.meta.env.VITE_APP_API_FILES}${el.fileName}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}{" "}
      </Swiper>
    </>
  );
}
