
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Base_url,Api,End_url} from '../api/index'
// Import required modules
import { Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {mehsul} from '../route_static/index'
import Loading from "./Loading";
export default function MehsulCarusel() {
  const { t, i18n } = useTranslation();
  const [mehsuls, setMehsuls] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 800 ? 1 : 3);
  const navigate = useNavigate();
  const [loadin,setloading] = useState(true)
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/products/`);
        setMehsuls(response.data);
        setloading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setloading(false)
        // navigate("/no-found"); // Uncomment if you want to navigate on error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 800 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the correct slidesPerView on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if(loadin){
    return <Loading></Loading>
  }
  return (
    <section id="MehsulCarusel">
      <div className="MehsulCarusel-word">
        <h3>{t("mehsullarimiz")}</h3>
      </div>
      <div className="MehsulCarusel">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {mehsuls.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={mehsul} className="MehsulCarusel-item">
                <div className="MehsulCarusel-item-img">
                  <img src={item.image1} alt="Mehsul" />
                </div>
                <div className="MehsulCarusel-item-word">
                  <strong>{getLocalizedField(item, 'title')}</strong>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
