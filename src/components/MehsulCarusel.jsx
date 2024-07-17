import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
// import { mehsuls } from "../data/data";
import Group_22 from "../img/Group_22.png";
import Group_23 from "../img/Group_23.png";
import Group_24 from "../img/Group_24.png";
import Group_25 from "../img/Group_25.png";
import Group_26 from "../img/Group_26.png";
import Group_27 from "../img/Group_27.png";
import { Link } from "react-router-dom";
export default function MehsulCarusel() {
  const mehsuls =[
    {
      text: [
        {
          h4:" Neytral məhsullar",
          word:"Bizim geniş çeşidli promosyon məhsullarımız sizə kiçik qəlyanaltılar, şəkər paketləri, əl dezinfeksiya edən salfetlər və daha çox kimi neytral məhsullar təklif edir ki, biz onları loqotipiniz çap edilmədən sizə təqdim edirik. Hazır və maraqlı dizaynlar arasından seçim etmək və ya tamamilə çap olunmamış versiyanı seçmək seçiminiz var."
        },
        {
          h4:"Giveaway məhsulları həmişə yaxşı qəbul edilir!",
          word:"Bu cür reklam olmadan belə, kiçik hədiyyələr və praktik hədiyyələr biznesiniz, iaşə müəssisəniz və ya buna bənzər şeylər üçün ideal hədiyyələrdir - və eyni zamanda həqiqətən də gözəl görünürlər! Zövqünüzə uyğun olaraq müxtəlif dizaynlarda və müxtəlif, hazır motivli çaplarla fərdi çap edilmiş reklam materiallarına ucuz və tez çatdırılan alternativlər təklif edirik. İndi seçin və onlayn sifariş edin!"
        },
      ]
    },
  
    {
      img:Group_22,
      name:"LOGOLU ŞƏKƏR Çubuqları",
      title:"Loqolu şəkər çubuqları yaddaşınızda qalacaq! Siz öz istəyinizə uyğun olaraq şəkər qozalarını çap etdirə bilərsiniz. İstər iaşə sənayesi üçün, istərsə də ticarət yarmarkalarında hədiyyə olaraq. Çap şəkər çubuqları hər anı şirinləşdirən xüsusi reklam vasitəsidir.    ",
      Mehsul:["Məhsul: ","Şəkər çubuqları"],
      Stikformati:["Stik formatı: ","100x40 mm"],
      Tezyig:["Təzyiq: ","Şəkil keyfiyyətində rəqəmsal çap CMYK    "],
      Icindeki:["İçindəkilər: ","Ağ incə şəkər / qəhvəyi qamış şəkəri /üzvi qamış şəkəri"],
      Xalis:["Xalis çəki: ","3,6q"],
      Davamlilig:["Davamlılıq: ","Düzgün saxlandıqda qeyri-müəyyən saxlama müddətinə malikdir "],
      id:'1',
    },
  
  
    {
      img:Group_23,
      name:"LOGOLU ÇAPLI ŞƏKƏR PAKETLERİ",
      title:"Müştərilərinizin çayını və ya qəhvəsini şirinləşdirin və eyni zamanda şəkər paketlərini reklam mesajı kimi istifadə edin. Çap edilmiş şəkər qozaları həm də qəhvə içmək üçün əlavə olaraq yaxşı reklam sahəsi təklif edir və buna görə də yadda qalır. Şirkətinizin loqotipi və ya dizaynı şəkər paketində mükəmməl şəkildə təqdim olunur.",
      Mehsul:["Məhsul: ","Şəkər paketləri"],
      Stikformati:["Format: ","60x60mm"],
      Tezyig:["Təzyiq: ","Rəqəmsal çap - CMYK"],
      Icindeki:["Qutunun içindəkilər: ","1000 ədəd"],
      Xalis:["Xalis çəki: ","3,6q"],
      Davamlilig:["Davamlılıq: ","Düzgün saxlandıqda qeyri-müəyyən saxlama müddətinə malikdir"],
      id:'2',
    },
    {
      
      img:Group_24,
      name:"DUZ / İSTİOT / BİBƏR",
      title:"Duz, istiot və çili paketlərimizlə reklam materiallarınızı verə bilərsiniz",
      Mehsul:["Məhsul: ","Duz/istiot/çili paketləri"],
      Stikformati:["Format: ","Standart 60x60mm"],
      Tezyig:["Təzyiq: ","Rəqəmsal çap - CMYK"],
      Icindeki:["Qutunun içindəkilər: ","1000 ədəd"],
      Xalis:["İçindəkilər: ","Duz 1 q / bibər 0,2 q / çili 0,2 q"],
      Davamlilig:["Davamlılıq: ","Duz: limitsiz / Bibər: 2 il / Çili: 2 il"],
      id:'3',
    },
    {
      img:Group_25,
      name:"LOGOLU SƏHƏT DƏSMƏLƏRİ",
      title:"Həssas dərilərdə belə gigiyenik cəhətdən təmiz və yumşaqdır: fərdi qablaşdırılan təravətləndirici salfetlər hər yerdə qəbul edilir və müxtəlif üsullarla istifadə edilə bilər. Loqotipinizlə çap edilmiş müştəriləriniz praktiki təzə dəsmalları xoş təmizlik kimi xatırlayacaqlar.",
      Mehsul:["Məhsul: ","Hər biri gigiyenik fərdi paketdə 1 yaş salfet"],
      Tezyig:["Təzyiq: "," Şəkil keyfiyyətində rəqəmsal çap CMYK"],
      Icindeki:["Ətir: ","Seçmək üçün 6 ətir, hamısı spirtsiz"],
      Xalis:["İçindəkilər: ","Daxili parça viskoz fleece"],
      Davamlilig:["Davamlılıq: ","Ən yaxşısı 24 aydan əvvəl"],
      id:'4',
    },
    {
      img:Group_26,
      name:"TƏMİZLİK PARÇALARI    ",
      title: `Tətbiq sahəsi: Sililə bilən səthləri və tibbi inventarları (akril şüşədən başqa) dezinfeksiya etmək üçün istifadəyə hazır məhlul. Bakterisid təsirə malikdir (MRSA daxil olmaqla), tüberkülosid, maya öldürücü, məhdud virusidal (o cümlədən HBV, HİV, vaksinlər, BVDV (HCV), qrip/qrip virusları); Noro, Rota, Adeno, SV40 viruslarına qarşı təsirlidir; HACCP bazarlıq sertifikatı. Covid-19 viruslarına qarşı da təsirlidir.`,
      titleSecond:`Təhlükə ifadələri: Yanan maye və buxar. Uşaqlar üçün uyğun deyil. Oddan uzaq dur. Gözlərinizə girməsinə imkan verməyin. Dəri ilə təmasda olduqda, əlləri və ya dərini su/duş ilə yuyun. Regional/milli/beynəlxalq qaydalara uyğun olaraq utilizasiya edin. Yanan!    `,
      Mehsul:["Məhsul: "," Hər biri gigiyenik fərdi paketdə 1 təmizləyici parça"],
      Stikformati:["Çanta: ","Polyester / alüminium / PE kompozit film ağ"],
      Tezyig:["Təzyiq: ","Şəkil keyfiyyətində rəqəmsal çap CMYK    "],
      Icindeki:["İçindəkilər: ","Daxili parça viskoz fleece"],
      Davamlilig:["Davamlılıq: "," Ən yaxşısı 24 aydan əvvəl"],
      id:"6"
    },
    {
      img:Group_27,
      name:"POPCORN",
      title:`Rahat ev kinoteatrı axşamı üçün mükəmməl qəlyanaltı xırıltı yaradır,
      eşidə biləcəyiniz və dadına biləcəyiniz həyəcanverici atmosfer. The
      Bizim popkornumuzla divanınıza kino hissi gəlir. Popkorn təklif olunur
      müxtəlif tatlar, şirin və ya duzlu.
      `,
      titleSecond:`Hər kəs üçün
  özləri və şirkətləri üçün yaxşı bir şey etmək istəyir. Popkorn çantalarını reklam vasitəsi kimi istifadə edin
  əhatə dairənizi genişləndirin və diqqəti şirkətinizə cəlb edin.`,
  
      Mehsul:["Məhsul: ","Popkorn"],
      Stikformati:["Format: ","85x160 mm"],
      Tezyig:["Təzyiq: ","Rəqəmsal çap - foto keyfiyyətində CMYK"],
      Icindeki:["Material: ","Polyester/ALU/PE"],
      Xalis:["İçindəkilər: ","10 q bişmiş popkorn, kərə yağı karamel-Tahiti vanili"],
      Davamlilig:["Davamlılıq: ","4 ay"],
      id:'5',
    }
  
  
  ];
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 891 ? 1 : 3);
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 800 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <>
      <section id="MehsulCarusel">
        <div className="MehsulCarusel-word">
          <h3>Məhsullarimiz</h3>
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
            <div className="MehsulCarusel-container">
              {mehsuls.map((item) => (
                <>
                {
                  item.name && (
                                      <SwiperSlide key={item.id}>
                    <Link to={'/Məhsullar'} className="MehsulCarusel-item">
                      <div className="MehsulCarusel-item-img">
                        <img src={item.img} alt="Mehsul" />
                      </div>
                      <div className="MehsulCarusel-item-word">
                        <strong>{item.name}</strong>
                      </div>
                    </Link>
                  </SwiperSlide>
                  )
                }

                </>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}
