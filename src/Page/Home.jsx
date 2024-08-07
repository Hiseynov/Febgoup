import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Carusel from '../components/Carusel';
import MehsulCarusel from '../components/MehsulCarusel';
import Contact from '../components/Contact';
import istehsal from "../img/istehsal.png";
import Temir from "../img/Temir.jpeg";
import cadtirmaIcon from "../img/cadtirmaIcon.png";
import inovativIcon from "../img/inovativIcon.png";
import TeminatIcon from "../img/TeminatIcon.png";
import {Base_url,Api,End_url} from '../api/index'
function Home() {
  const navigate = useNavigate();
  const [dataLogo, setDataLogo] = useState([]);
  const { t } = useTranslation();
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 891 ? 1 : 4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/partners/`);
        setDataLogo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // navigate("/no-found"); // Uncomment if you want to handle the error with navigation
      }
    };

    fetchData();
  }, []); // Запрос данных выполняется один раз при монтировании компонента

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 800 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>'Feb Group' - Paketləmə innovasiyaları: Bizimlə asan və keyfiyyətli!</title>
        <meta name="description" content="'Feb Group' - Fabrikamız dinamik şirkətdir, karton və qablaşdırma məhsullarında uzmanlaşır və yüksək keyfiyyət təmin edir." />
        <meta property="og:title" content="'Feb Group' - Paketləmə innovasiyaları: Bizimlə asan və keyfiyyətli!"/>
        <meta property="og:description" content="'Feb Group' - Fabrikamız dinamik şirkətdir, karton və qablaşdırma məhsullarında uzmanlaşır və yüksək keyfiyyət təmin edir."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="'Feb Group' - Paketləmə innovasiyaları: Bizimlə asan və keyfiyyətli!"/>
        <meta name="twitter:description" content="'Feb Group' - Fabrikamız dinamik şirkətdir, karton və qablaşdırma məhsullarında uzmanlaşır və yüksək keyfiyyət təmin edir."/>
      </Helmet>
      <Carusel />
      <MehsulCarusel />
      <section id='Started'>
        <div className="Started-container">
          <div className="Started-logo">
            <h3>{t("niyebiz")}</h3>
          </div>
          <div className="Started-category">
            <ul>
              <li>
                <div className="Started-categories-icon">
                  <img src={inovativIcon} alt="İnnovativ iconu" />
                </div>
                <div className="Started-categories-word">
                  <h3>{t("ad_1")}</h3>
                  <p>{t("info_1")}</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                  <img src={Temir} alt="istehsal icon" />
                </div>
                <div className="Started-categories-word">
                  <h3>{t("ad_2")}</h3>
                  <p>{t("info_2")}</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                  <img src={TeminatIcon} alt="Keyfiyyət Təminatı iconu" />
                </div>
                <div className="Started-categories-word">
                  <h3>{t("ad_3")}</h3>
                  <p>{t("info_3")}</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                  <img src={cadtirmaIcon} alt="Etibarlı Çatdırılma iconu" />
                </div>
                <div className="Started-categories-word">
                  <h3>{t("ad_4")}</h3>
                  <p>{t("info_4")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='Hakimizda'>
        <div className="Hakimizda">
          <div className="Hakimizda-container">
            <div className="Hakimizda-top">
              <h3>{t("fabrikHakimizda")}</h3>
            </div>
            <div className="Hakimizda-button">
              <div className="Hakimizda-button-word">
                <p>{t("fabrikaInfo")}</p>
              </div>
              <div className="Hakimizda-button-photo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="HomeLogo">
        <section className="HomeLogo">
          <div className="HomeLogo-logo">
            <h3>{t("referanslar")}</h3>
          </div>
          <ul className='HomeLogo-categories'>
            <div className="HomeLogo-category">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {dataLogo.map((item, id) => (
                  <SwiperSlide key={id}>
                    <div className="HomeLogo-item">
                      <div className="HomeLogo-item-img">
                        <img src={item.company_logo} alt={item.company_name} title={item.company_name} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </ul>
        </section>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
