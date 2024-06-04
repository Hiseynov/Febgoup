import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation ,Autoplay} from "swiper/modules";

export default function App() {
  return (
    <>
      <section id="Carusel">
        <div className="Carusel">
          <div className="Carusel-container">
                  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Pagination, Navigation]}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
              <h3>Logolu Seker cubuglari</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="https://kuyo.de/wp-content/uploads/2019/02/zuckersticks_1-min.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
              <h3>Logolu Seker cubuglari</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="https://kuyo.de/wp-content/uploads/2019/02/zuckersticks_1-min.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
              <h3>Logolu Seker cubuglari</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, animi.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="https://kuyo.de/wp-content/uploads/2019/02/zuckersticks_1-min.png" alt="" />
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
          </div>
        </div>
      </section>

    </>
  );
}
