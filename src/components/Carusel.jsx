import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation ,Autoplay} from "swiper/modules";
import Group_22 from "../img/Group_22.png";
import Group_23 from "../img/Group_23.png";
import Group_24 from "../img/Group_24.png";
import Group_25 from "../img/Group_25.png";
import Group_26 from "../img/Group_26.png";
import Group_27 from "../img/Group_27.png";
export default function App() {
  const dataCarusel = [
    {
      url:Group_22,
      urlPng:Group_22.png,
      logo:"LOGOLU ŞƏKƏR Çubuqları",
      title:"Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz."

    },
    {
      url:Group_23,
      urlPng:Group_23.png,
      logo:"LOGOLU ÇAPLI ŞƏKƏR PAKETLERİ",
      title:"Müştərilərinizin çayını və ya qəhvəsini şirinləşdirin və eyni zamanda şəkər paketlərini reklam mesajı kimi istifadə edin."

    },
    {
      url:Group_24,
      urlPng:Group_24.png,
      logo:"DUZ / İSTİOT / BİBƏR",
      title:"Duz, istiot və çili paketlərimizlə reklam materiallarınızı verə bilərsiniz doğru ədviyyat."

    },
    {
      url:Group_25,
      urlPng:Group_25.png,
      logo:"LOGOLU ŞƏKƏR Çubuqları",
      title:"Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz."

    },
    {
      url:Group_26,
      urlPng:Group_26.png,
      logo:"LOGOLU ŞƏKƏR Çubuqları",
      title:"Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz."

    },
    {
      url:Group_27,
      urlPng:Group_27.png,
      logo:"LOGOLU ŞƏKƏR Çubuqları",
      title:"Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz."

    }
  ]

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
          delay: 10000,
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
        {
          dataCarusel.map((item,id)=>(
        <SwiperSlide key={id}>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            


              <h3>{item.logo}</h3>
              <p>{item.title}</p>
              {/* <button>Sifaris et</button> */}
              <a target='_blank' href={item.url} download={item.urlPng}>Katalog yüklə</a>
            </div>
            <div className="Carusel-container-photo">
              <img src={item.url} alt="" />
            </div>
          </div>
        </SwiperSlide>
          ))
        }




      </Swiper>
          </div>
        </div>
      </section>

    </>
  );
}
