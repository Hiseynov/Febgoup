

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {Base_url,Api,End_url} from '../api/index'
export default function App() {
  const [dataCarusel, setDataCarusel] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/headers/`);
        setDataCarusel(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Uncomment this line if you want to handle navigation on error
        // navigate("/no-found");
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  return (
    <section id="Carusel">
      <div className="Carusel">
        <div className="Carusel-container">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={dataCarusel.length > 1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {dataCarusel.map((item, id) => (
              <SwiperSlide key={id}>
                <div className="Carusel-container-item">
                <div className="Carusel-container-photo"  style={{
                        backgroundImage: `url(${item.header_image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%'
                       
                      }}>
                         <div className="Carusel-container-word">
                    <h3>{getLocalizedField(item, 'header_title')}</h3>
                    <p>{getLocalizedField(item, 'header_text')}</p>
                    {item.link && (
                      <a target='_blank' rel='noopener noreferrer' href={item.link} download>{t('katalog')}</a>
                    )}
                  </div>
                  </div>
             

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
