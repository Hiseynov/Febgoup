import React, { useEffect } from 'react'
import { useState } from 'react'
import Carusel from '../components/Carusel'
import Categories from '../components/Categories'
import MehsulCarusel from '../components/MehsulCarusel'
import Group_29 from "../img/Group_29.png";
import Group_30 from "../img/Group_30.png";
import Group_31 from "../img/Group_31.png";
import Group_32 from "../img/Group_32.png";
import image_15 from "../img/image_15.png";
import image_16 from "../img/image_16.png";
import image_17 from "../img/image_17.png";
import image_18 from "../img/image_18.png";
import image_19 from "../img/image_19.png";
import image_20 from "../img/image_20.png";
import istehsal from "../img/istehsal.png";
import Temir from "../img/Temir.jpeg";
import cadtirmaIcon from "../img/cadtirmaIcon.png";
import inovativIcon from "../img/inovativIcon.png";
import TeminatIcon from "../img/TeminatIcon.png";
import { Helmet } from 'react-helmet'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
function Home() {
  const dataLogo = [
    {
      url:Group_29,
    },
    {
      url:Group_30,
    },
    {
      url:Group_31,
    },
    {
      url:Group_32,
    },
    {
      url:image_15,
    },
    {
      url:image_16,
    },
    {
      url:image_17,
    },
    {
      url:image_18,
    },
    {
      url:image_19,
    },
    {
      url:image_20,
    },
   
  ]
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 891 ? 1 : 4);
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 800 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  // const [PropsData,setPropsData] = useState("")
  // const [PostData,setPostData] = useState(false)
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedText, setIsFocusedText] = useState(false);

  // Обработчик события фокуса на поле ввода
  // User

  const handleFocusUser = () => {
    setIsFocusedUser(true);
  };
  // Обработчик события потери фокуса на поле ввода
  const handleBlurUser = () => {
    setIsFocusedUser(false);
  };

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  };
  // Обработчик события потери фокуса на поле ввода
  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };


  // Textarea
  const handleFocusText = () => {
    setIsFocusedText(true);
  };
  // Обработчик события потери фокуса на поле ввода
  const handleBlurText = () => {
    setIsFocusedText(false);
  };
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
        {/* Другие метатеги */}
      </Helmet>
    <Carusel></Carusel>

    <MehsulCarusel></MehsulCarusel>
      <section id='Started'>
        <div className="Started-container">
          <div className="Started-logo">
            <h3>Niyə Biz</h3>
          </div>
          <div className="Started-category">
            <ul>
              <li>
                <div className="Started-categories-icon">
                <img src={inovativIcon} alt="İnnovativ iconu" />
                </div>
                <div className="Started-categories-word">

                  <h3>İnnovativ Dizayn</h3>
                  <p>Qablaşdırmanızı fərqləndirən fərdi həllər.</p>
                </div>
              </li>


              <li>
                <div className="Started-categories-icon">
                <img src={Temir} alt="istehsal icon" />
                </div>
                <div className="Started-categories-word">
                  <h3>Çox yönlü istehsal</h3>
                  <p>Bütün qablaşdırma ehtiyacları üçün qabaqcıl avadanlıq</p>
                </div>
              </li>
              <li>
              


                <div className="Started-categories-icon">
                <img src={TeminatIcon} alt="Keyfiyyət Təminatı iconu" />
                </div>
                <div className="Started-categories-word">
                  <h3>Keyfiyyət Təminatı.</h3>
                  <p>Hər mərhələdə keyfiyyətə və dürüstlüyə sadiqlik.</p>
                </div>
              </li>
              

              <li>
                <div className="Started-categories-icon">
                <img src={cadtirmaIcon} alt="Etibarlı Çatdırılma iconu" />
                </div>
                <div className="Started-categories-word">
                  <h3>Etibarlı Çatdırılma</h3>
                  <p>Diqqətli personal tərəfindən təhlükəsiz, vaxtında çatdırılma.</p>
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
    <h3>Fabrikimiz haqqında</h3>
    </div>
    <div className="Hakimizda-button">
      <div className="Hakimizda-button-word">
        <p>Fabrikimizin xüsusi komandaya və ən müasir avadanlıqlara malik dinamik şirkətdir. Biz geniş çeşiddə karton və qablaşdırma məhsullarının istehsalında ixtisaslaşmışıq. Qısa müddət ərzində biz müştərilərimiz arasında əla reputasiya qazandıq. İstehsal prosesinin hər mərhələsində dürüstlük və keyfiyyətə sadiqliyimiz güclü imic və reputasiyamızı qoruyub saxlamağımızı təmin edir.</p>
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
          <h3>Referanslarimiz</h3>
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
            {
              dataLogo.map((item,id)=>(
                <SwiperSlide key={id}>
                    <div className="HomeLogo-item">
                      <div className="HomeLogo-item-img">
                        <img src={item.url} alt="Logo" />
                      </div>
                    
                    </div>
                  </SwiperSlide>
              ))
            }
              


          </Swiper>
          </div>

        </ul>
      </section>
    </section>
    <section id="contact">
      <div className="contact">
              <div className="elage">
        <h3 className="contact-title">Bizimlə əlaqə saxlayın</h3>
        <form action="">
          <div className="Contactform-top">
            <div className="ContactInputItem">
              <input 
              type="text"
               placeholder='Ad'
               required
                      onFocus={handleFocusUser}
                      onBlur={handleBlurUser}
                      className={isFocusedUser ? "focused" : ""} />
            </div>
            <div className="ContactInputItem">
              <input type="email" placeholder='Mail'
              required
              onFocus={handleFocusEmail}
              onBlur={handleBlurEmail}
              className={isFocusedEmail ? "focused" : ""} />
            </div>
          </div>
          <div className="Contactform-center">
            <textarea
             onFocus={handleFocusText}
             onBlur={handleBlurText}
             className={isFocusedText ? "focused" : ""}
            placeholder='Mesajinizi yazin...' cols="30" rows="10"></textarea>
          </div>
          <div className="Contactform-button">
            <button type="submit">Göndər</button> 
          </div>
        </form>
      </div>
     
      <div className="contact-wrapper">
      
        <Categories></Categories>
        <div className="contact-map-items">
        
          <div className="contact-map">
        
           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.445201690104!2d49.898656976010116!3d40.398987171442386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU2LjQiTiA0OcKwNTQnMDQuNCJF!5e0!3m2!1sru!2saz!4v1719489019410!5m2!1sru!2saz" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      </div>

    </section>
    </>
  )
}

export default Home