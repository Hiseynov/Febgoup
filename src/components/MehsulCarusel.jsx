import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { mehsuls } from "../data/data";

export default function MehsulCarusel() {
  return (
    <>
      <section id="MehsulCarusel">
        <div className="MehsulCarusel-word">
          <h3>Məhsullarimiz</h3>
        </div>
        <div className="MehsulCarusel">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div className="MehsulCarusel-container">
              {mehsuls.map((item) => (
                <>
                  <SwiperSlide key={item.id}>
                    <div className="MehsulCarusel-item">
                      <div className="MehsulCarusel-item-img">
                        <img src={item.img} alt="Mehsul" />
                      </div>
                      <div className="MehsulCarusel-item-word">
                        <strong>{item.name}</strong>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
