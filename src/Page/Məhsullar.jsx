import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {Base_url,Api,End_url} from '../api/index'
import {replaceTextFormated} from "../functions/replaceTextFormated"
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
        setloading(false)
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
                  <h3  dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'title')) }} />
                  <p  dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'article')) }} />
                  <p  dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(firstData, 'information')) }} />
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
                <h3  dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(item, 'title')) }} />
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
//////anar
// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import {Base_url, Api, End_url} from '../api/index'
// import Loading from '../components/Loading';

// const LogoMaker = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedDesign, setSelectedDesign] = useState(null);
//   const [DizaynData, setDizaynData] = useState([]);
//   const [filterdesingId, setFilterdesingId] = useState(1);
//   const [selecthis, setSelecthis] = useState(1);
//   const [Dizayn, setDizayn] = useState([]);
//   const [Mehsular, setMehsular] = useState([]);
//   const { i18n } = useTranslation();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   const getLocalizedField = (item, field) => {
//     return item[`${field}_${i18n.language}`] || item[`${field}_az`];
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [designResponse, productResponse] = await Promise.all([
//           axios.get(`${Base_url}${Api}${End_url}/design/`),
//           axios.get(`${Base_url}${Api}${End_url}/design/categories/`)
//         ]);
//         setDizayn(designResponse.data);
//         setMehsular(productResponse.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.error('Error fetching data:', error);
//         // navigate("/no-found");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   useEffect(() => {
//     // Фильтрация Dizayn на основе filterdesingId
//     const filteredData = Dizayn.filter(item => item.product_category === filterdesingId);
//     setDizaynData(filteredData);
//   }, [filterdesingId, Dizayn]); // Убедитесь, что Dizayn также добавлен в зависимости

//   const { t } = useTranslation();
//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <Helmet>
//         <title>'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!</title>
//         <meta name="description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
//         <meta property="og:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!" />
//         <meta property="og:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!" />
//         <meta name="twitter:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
//       </Helmet>
//       <div className="Sablon">
//         <div className="Sablon-container">
//           <div className="Sablon-change">
//             <div className="Sablon-change-categories">
//               <ul>
//                 <li onClick={() => setSelecthis(1)}>
//                   <i className="fa-solid fa-clipboard-check"></i>
//                   <span>{t("mehsulsablon")}</span>
//                 </li>
//                 <li onClick={() => setSelecthis(2)}>
//                   <i className="fa-solid fa-object-ungroup"></i>
//                   <span>{t("dizaynsablon")}</span>
//                 </li>
//                 {/* <li onClick={() => setSelecthis(3)}>
//                   <i className="fa-solid fa-download"></i>
//                   <span>{t("logoyuklesablon")}</span>
//                 </li>
//                 <li onClick={() => setSelecthis(4)}>
//                   <i className="fa-solid fa-download"></i>
//                   <span>{t("mehsulyuklesablon")}</span>
//                 </li> */}
//               </ul>
//             </div>
//             <div className="Sablon-change-category">
//               {
//                 selecthis === 1 ? Mehsular.map(product => (
//                   <button key={product.id} onClick={() => (setSelectedProduct(product.template_image), setFilterdesingId(product.id))}>
//                     <img src={product.template_image} alt={getLocalizedField(product, 'title')} title={getLocalizedField(product, 'title')} />
//                   </button>
//                 )) : selecthis === 2 ? (DizaynData.length > 0 ? (
//                   DizaynData.map(design => (
//                     <button key={design.id} onClick={() => (setSelectedDesign(design.template_image))}>
//                       <img src={design.template_image} alt={getLocalizedField(design, 'title')} title={getLocalizedField(design, 'title')} />
//                     </button>
//                   ))
//                 ) : <p>{t("noDesignsAvailable")}</p>) : ""
//                 // selecthis === 3 ? (
//                 //   <div className="Sablon-down-container">
//                 //     <div className="Sablonn-down">
//                 //       <i className="fa-solid fa-turn-down"></i>
//                 //       <span>{t("logoyuklesablon")}</span>
//                 //       <input type="file" accept="image/*" onChange={handleFileChange} />
//                 //     </div>
//                 //   </div>
//                 // ) : (
//                 //   <div className="Sablon-down-container">
//                 //     <div className="Sablonn-down">
//                 //       <button onClick={handleDownloadPNG}>
//                 //         <i className="fa-solid fa-turn-down"></i>
//                 //         <span>{t("mehsulyuklesablon")}</span>
//                 //       </button>
//                 //     </div>
//                 //   </div>
//                 // )
//               }
//             </div>
//           </div>
//           <div className="Sablon-view">
//             <div className="SablonView-fon">
//               {selectedProduct && <img src={selectedProduct} alt="" />}
//               <div className="SablonView-dizayn">
//                 {/* {customImage || selectedDesign ? <img src={customImage || selectedDesign} alt="" /> : null} */}
//                 {selectedDesign && <img src={selectedDesign} alt="" />}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Sablon-button">
//           <div className="Sablon-button-container">
//             <a href="https://wa.me/994552778701" target='_blank' rel="noopener noreferrer">
//               <i className="fa fa-whatsapp"></i>
//               {t("whatsappsifaris")}
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LogoMaker;
