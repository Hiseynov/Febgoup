import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {Base_url,Api,End_url} from '../api/index'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Loading from '../components/Loading';
function Məhsullar() {
  const { t, i18n } = useTranslation();
  const [mehsuls, setMehsuls] = useState([]);
  const [firstData, setFirstData] = useState(null);
  const navigate = useNavigate();
  const [loadin,setloading] = useState(true)
  // Функция для получения локализованного поля
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  // Хук useEffect для выполнения запроса данных только один раз при монтировании
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/products/`);
        setMehsuls(response.data);
        setloading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Можно добавить обработку ошибки, например, показать сообщение об ошибке или перенаправление
        // navigate("/no-found");
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что запрос выполнится только один раз

  // Обработчик клика на элементе
  const handleItemClick = (item) => {
    setFirstData(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if(loadin){
    return <Loading></Loading>
  }
  return (
    <>
      <Helmet>
        <title>'Feb Group' - Ən yaxşı paketləmə həlləri: keyfiyyəti seçin!</title>
        <meta name="description" content="'Feb Group' - Bizim məhsullarımız sizi memnun etmək üçün yaradılmışdır. Hər bir detay, ən yüksək keyfiyyət və innovativ dizayn ilə işlənmişdir. Bizimlə işləməklə məhsullarınızı unikal və fərqli bir şəkildə təcrübə etməyə başlayacaqsınız." />
        <meta property="og:title" content="'Feb Group' - Ən yaxşı paketləmə həlləri: keyfiyyəti seçin!"/>
        <meta property="og:description" content="'Feb Group' - Bizim məhsullarımız sizi memnun etmək üçün yaradılmışdır. Hər bir detay, ən yüksək keyfiyyət və innovativ dizayn ilə işlənmişdir. Bizimlə işləməklə məhsullarınızı unikal və fərqli bir şəkildə təcrübə etməyə başlayacaqsınız."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="'Feb Group' - Ən yaxşı paketləmə həlləri: keyfiyyəti seçin!"/>
        <meta name="twitter:description" content="'Feb Group' - Bizim məhsullarımız sizi memnun etmək üçün yaradılmışdır. Hər bir detay, ən yüksək keyfiyyət və innovativ dizayn ilə işlənmişdir. Bizimlə işləməklə məhsullarınızı unikal və fərqli bir şəkildə təcrübə etməyə başlayacaqsınız."/>
      </Helmet>
      
      <div className="Mehsul">
        <div className="Mehsul-container"> 
          {!firstData && (
            <div className="Mehsul-info">
              <div className="Mehsul-infoItem">
                <h3>{t("logo_1mehsul")}</h3>
                <p>{t("title_1mehsul")}</p>
              </div>
              <div className="Mehsul-infoItem">
                <h3>{t("logo_2mehsul")}</h3>
                <p>{t("title_2mehsul")}</p>
              </div>
            </div>
          )}
          {firstData && (
            <div className="MehsulFirst">
              <div className="MehsulFirst-img">
                {/* <img src={firstData.template_image} alt="" /> */}
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
        {
                    firstData.image1 && (
                      <SwiperSlide> 
                        <img src={firstData.image1} alt='Детальное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image2 && (
                      <SwiperSlide> 
                        <img src={firstData.image2} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image3 && (
                      <SwiperSlide> 
                        <img src={firstData.image3} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image4 && (
                      <SwiperSlide> 
                        <img src={firstData.image4} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image5 && (
                      <SwiperSlide> 
                        <img src={firstData.image5} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image6 && (
                      <SwiperSlide> 
                        <img src={firstData.image6} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image7 && (
                      <SwiperSlide> 
                        <img src={firstData.image7} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image8 && (
                      <SwiperSlide> 
                        <img src={firstData.image8} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image9 && (
                      <SwiperSlide> 
                        <img src={firstData.image9} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image10 && (
                      <SwiperSlide> 
                        <img src={firstData.image10} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                           {
                    firstData.image11 && (
                      <SwiperSlide> 
                        <img src={firstData.image11} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image12 && (
                      <SwiperSlide> 
                        <img src={firstData.image12} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image13 && (
                      <SwiperSlide> 
                        <img src={firstData.image13} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image14 && (
                      <SwiperSlide> 
                        <img src={firstData.image14} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image15 && (
                      <SwiperSlide> 
                        <img src={firstData.image15} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image16 && (
                      <SwiperSlide> 
                        <img src={firstData.image16} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image17 && (
                      <SwiperSlide> 
                        <img src={firstData.image17} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image18 && (
                      <SwiperSlide> 
                        <img src={firstData.image18} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image19 && (
                      <SwiperSlide> 
                        <img src={firstData.image19} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image20 && (
                      <SwiperSlide> 
                        <img src={firstData.image20} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                 </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiperr"
                >
                  {
                    firstData.image1 && (
                      <SwiperSlide> 
                        <img src={firstData.image1} alt='Детальное фотография машины' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image2 && (
                      <SwiperSlide> 
                        <img src={firstData.image2} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image3 && (
                      <SwiperSlide> 
                        <img src={firstData.image3} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image4 && (
                      <SwiperSlide> 
                        <img src={firstData.image4} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image5 && (
                      <SwiperSlide> 
                        <img src={firstData.image5} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image6 && (
                      <SwiperSlide> 
                        <img src={firstData.image6} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image7 && (
                      <SwiperSlide> 
                        <img src={firstData.image7} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image8 && (
                      <SwiperSlide> 
                        <img src={firstData.image8} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image9 && (
                      <SwiperSlide> 
                        <img src={firstData.image9} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image10 && (
                      <SwiperSlide> 
                        <img src={firstData.image10} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image11 && (
                      <SwiperSlide> 
                        <img src={firstData.image11} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image12 && (
                      <SwiperSlide> 
                        <img src={firstData.image12} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image13 && (
                      <SwiperSlide> 
                        <img src={firstData.image13} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image14 && (
                      <SwiperSlide> 
                        <img src={firstData.image14} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image15 && (
                      <SwiperSlide> 
                        <img src={firstData.image15} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image16 && (
                      <SwiperSlide> 
                        <img src={firstData.image16} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image17 && (
                      <SwiperSlide> 
                        <img src={firstData.image17} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image18 && (
                      <SwiperSlide> 
                        <img src={firstData.image18} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image19 && (
                      <SwiperSlide> 
                        <img src={firstData.image19} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                  {
                    firstData.image20 && (
                      <SwiperSlide> 
                        <img src={firstData.image20} alt='деталное фотография продукта' />
                        </SwiperSlide>

                     
                    )
                  }
                </Swiper>
              </div>
              <div className="MehsulFirst-word">
                <div className="MehsulFirst-word-text">
                  <h3>{getLocalizedField(firstData, 'title')}</h3>
                  <p>{getLocalizedField(firstData, 'article')}</p>
                  <p>{getLocalizedField(firstData, 'information')}</p>
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
                <h3>{getLocalizedField(item, 'title')}</h3>
              </div>
              <div className="MehsulItem-img">
                <img src={item.image1} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Məhsullar;

