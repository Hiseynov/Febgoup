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
            


              <h3>LOGOLU ŞƏKƏR Çubuqları</h3>
              <p>Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 22.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            

         


              <h3>LOGOLU ÇAPLI ŞƏKƏR PAKETLERİ</h3>
              <p>Müştərilərinizin çayını və ya qəhvəsini şirinləşdirin və eyni zamanda şəkər paketlərini reklam mesajı kimi istifadə edin.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 23.png" alt="" />
              {/* <img src="src/img/image 9.png" alt="" /> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            



              <h3>DUZ / İSTİOT / BİBƏR</h3>
              <p>Duz, istiot və çili paketlərimizlə reklam materiallarınızı verə bilərsiniz doğru ədviyyat.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 24.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            
           



              <h3>LOGOLU SƏHƏT DƏSMƏLƏRİ</h3>
              <p>Həssas dərilərdə belə gigiyenik cəhətdən təmiz və yumşaqdır</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 25.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            

            


              <h3>TƏMİZLİK PARÇALARI</h3>
              <p>Tətbiq sahəsi: Sililə bilən səthləri və tibbi inventarları (akril şüşədən başqa) dezinfeksiya etmək üçün istifadəyə hazır məhlul.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 26.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            
            



              <h3>POPCORN</h3>
              <p>Rahat ev kinoteatrı axşamı üçün mükəmməl qəlyanaltı xırıltı yaradır, eşidə biləcəyiniz və dadına biləcəyiniz həyəcanverici atmosfer</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 27.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Carusel-container-item">
            <div className="Carusel-container-word">
            

            

              <h3>KEÇUP / MAYONEZ</h3>
              <p>Burger, kartof qızartması və barbekü üçün və ya yeməkləri zərifləşdirmək üçün dadlı yoldaş.</p>
              <button>Sifaris et</button>
            </div>
            <div className="Carusel-container-photo">
              <img src="src/img/Group 28.png" alt="" />
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
          </div>
        </div>
      </section>

    </>
  );
}
