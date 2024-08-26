

// import axios from 'axios';
// import React, { useEffect, useRef, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { Base_url, Api, End_url } from '../api/index';
// import { replaceTextFormated } from "../functions/replaceTextFormated";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import Loading from '../components/Loading';

// function Məhsullar() {
//   const { t, i18n } = useTranslation();
//   const [mehsuls, setMehsuls] = useState([]);
//   const [firstData, setFirstData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
  
//   const thumbsSwiperRef = useRef(null);
//   const mainSwiperRef = useRef(null);

//   // Функция для получения локализованного поля
//   const getLocalizedField = (item, field) => {
//     return item[`${field}_${i18n.language}`] || item[`${field}_az`];
//   };

//   // Хук useEffect для выполнения запроса данных только один раз при монтировании
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${Base_url}${Api}${End_url}/products/`);
//         setMehsuls(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Можно добавить обработку ошибки, например, показать сообщение об ошибке или перенаправление
//         // navigate("/no-found");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Пустой массив зависимостей означает, что запрос выполнится только один раз

//   // Обработчик клика на элементе
//   const handleItemClick = (item) => {
//     setFirstData(item);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{t("mehsul_title")}</title>
//         <meta name="description" content={t("title_1mehsul")} />
//         <meta property="og:title" content={t("mehsul_title")} />
//         <meta property="og:description" content={t("title_1mehsul")} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={t("mehsul_title")} />
//         <meta name="twitter:description" content={t("title_1mehsul")} />
//       </Helmet>

//       <div className="Mehsul">
//         <div className="Mehsul-container">
//           {!firstData && (
//             <div className="Mehsul-info">
//               <div className="Mehsul-infoItem">
//                 <p>{t("title_1mehsul")}</p>
//               </div>
//             </div>
//           )}
//           {firstData && (
//             <div className="MehsulFirst">
//               <div className="MehsulFirst-img">
//                 <Swiper
//                   style={{
//                     "--swiper-navigation-color": "#fff",
//                     "--swiper-pagination-color": "#fff",
//                   }}
//                   spaceBetween={10}
//                   navigation={true}
//                   thumbs={{ swiper: thumbsSwiperRef.current }}
//                   modules={[FreeMode, Navigation, Thumbs]}
//                   className="mySwiper2"
//                   onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//                 >
//                   {Array.from({ length: 20 }, (_, i) => `image${i + 1}`).map((img, index) => (
//                     firstData[img] && (
//                       <SwiperSlide key={index}>
//                         <img src={firstData[img]} alt={`Image ${index + 1}`} />
//                       </SwiperSlide>
//                     )
//                   ))}
//                 </Swiper>
//                 <Swiper
//                   onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
//                   spaceBetween={10}
//                   slidesPerView={4}
//                   freeMode={true}
//                   watchSlidesProgress={true}
//                   modules={[FreeMode, Navigation, Thumbs]}
//                   className="mySwiperr"
//                 >
//                   {Array.from({ length: 20 }, (_, i) => `image${i + 1}`).map((img, index) => (
//                     firstData[img] && (
//                       <SwiperSlide key={index}>
//                         <img src={firstData[img]} alt={`Thumbnail ${index + 1}`} />
//                       </SwiperSlide>
//                     )
//                   ))}
//                 </Swiper>
//               </div>
//               <div className="MehsulFirst-word">
//                 <div className="MehsulFirst-word-text">
//                   <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'title')) }} />
//                   <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'article')) }} />
//                   <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'information')) }} />
//                 </div>
//                 <div className="MehsulFirs-button">
//                   <button
//                     onClick={() => window.open("https://wa.me/994552778701", '_blank')}
//                     className="Mehsul-Submite"
//                   >
//                     {t("sifaris")}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <section className="Mehsulİtems">
//         <h2>{t("mehsulkesfele")}</h2>
//         <div className="MehsulItem-container">
//           {mehsuls.map((item, id) => (
//             <div
//               onClick={() => handleItemClick(item)}
//               key={id}
//               className="MehsulItem"
//             >
//               <div className="MehsulItem-word">
//                 <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(item, 'title')) }} />
//               </div>
//               <div className="MehsulItem-img">
//                 <img src={item.image1} alt={getLocalizedField(item, 'title')} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Məhsullar;

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Base_url, Api, End_url } from '../api/index';
import { replaceTextFormated } from "../functions/replaceTextFormated";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Loading from '../components/Loading';
import { CACHE_EXPIRY } from '../functions/DedlineLocalstoric';
const CACHE_KEY = 'mehsul';
const CACHE_DURATION = 7 * 60 * 1000; // 6 hours in milliseconds

function Məhsullar() {
  const { t, i18n } = useTranslation();
  const [mehsuls, setMehsuls] = useState([]);
  const [firstData, setFirstData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const thumbsSwiperRef = useRef(null);
  const mainSwiperRef = useRef(null);

  // Function to get localized field
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  // Function to fetch data from API
  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(`${Base_url}${Api}${End_url}/products/`);
      const data = response.data;
      // Update localStorage with new data
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data
      }));
      setMehsuls(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors as needed
      // navigate("/no-found");
    } finally {
      setLoading(false);
    }
  };

  // Effect to handle data fetching and caching
  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      const now = Date.now();

      // Check if cached data is still valid
      if (now - timestamp < CACHE_DURATION) {
        setMehsuls(data);
        setLoading(false);
      } else {
        // Fetch fresh data if cache is expired
        fetchDataFromApi();
      }
    } else {
      // Fetch data if no cache exists
      fetchDataFromApi();
    }
  }, []);

  // Handle item click
  const handleItemClick = (item) => {
    setFirstData(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>{t("mehsul_title")}</title>
        <meta name="description" content={t("title_1mehsul")} />
        <meta property="og:title" content={t("mehsul_title")} />
        <meta property="og:description" content={t("title_1mehsul")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("mehsul_title")} />
        <meta name="twitter:description" content={t("title_1mehsul")} />
      </Helmet>

      <div className="Mehsul">
        <div className="Mehsul-container">
          {!firstData && (
            <div className="Mehsul-info">
              <div className="Mehsul-infoItem">
                <p>{t("title_1mehsul")}</p>
              </div>
            </div>
          )}
          {firstData && (
            <div className="MehsulFirst">
              <div className="MehsulFirst-img">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiperRef.current }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                >
                  {Array.from({ length: 20 }, (_, i) => `image${i + 1}`).map((img, index) => (
                    firstData[img] && (
                      <SwiperSlide key={index}>
                        <img src={firstData[img]} alt={`Image ${index + 1}`} />
                      </SwiperSlide>
                    )
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiperr"
                >
                  {Array.from({ length: 20 }, (_, i) => `image${i + 1}`).map((img, index) => (
                    firstData[img] && (
                      <SwiperSlide key={index}>
                        <img src={firstData[img]} alt={`Thumbnail ${index + 1}`} />
                      </SwiperSlide>
                    )
                  ))}
                </Swiper>
              </div>
              <div className="MehsulFirst-word">
                <div className="MehsulFirst-word-text">
                  <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'title')) }} />
                  {
                    firstData.article_az && (
                      <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'article')) }} />

                    )
                  }
                  {
                    firstData.information_az && (
                      <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'information')) }} />

                    )
                  }
                </div>
                <div className="MehsulFirs-button">
                  <button
                    onClick={() => window.open("https://wa.me/994552778701", '_blank')}
                    className="Mehsul-Submite"
                  >
                    {t("sifaris")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="Mehsulİtems">
        <h2>{t("mehsulkesfele")}</h2>
        <div className="MehsulItem-container">
          {mehsuls.map((item, id) => (
            <div
              onClick={() => handleItemClick(item)}
              key={id}
              className="MehsulItem"
            >
              <div className="MehsulItem-word">
                <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(item, 'title')) }} />
              </div>
              <div className="MehsulItem-img">
                <img src={item.image1} alt={getLocalizedField(item, 'title')} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Məhsullar;
