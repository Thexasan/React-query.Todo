import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Swippers({ carImages }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {carImages?.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <img
                className="rounded-[10px]"
                src={`${import.meta.env.VITE_APP_API_FILES}${el.fileName}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </>
  );
}
