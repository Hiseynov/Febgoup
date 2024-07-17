import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
// import { mehsuls } from '../data/data'
import Group_22 from "../img/Group_22.png";
import Group_23 from "../img/Group_23.png";
import Group_24 from "../img/Group_24.png";
import Group_25 from "../img/Group_25.png";
import Group_26 from "../img/Group_26.png";
import Group_27 from "../img/Group_27.png";
function Məhsullar() {
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
  const [firstData,setfirstData] = useState(mehsuls[0])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [firstData]);
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
        {/* Другие метатеги */}
      </Helmet>
      <div className="Mehsul">
        <div className="Mehsul-container">  
        {
          firstData.text && (
            <div className="Mehsul-info">
              {firstData.text.map((item,id)=>(
                <div key={id} className="Mehsul-infoItem">
                  <h3>{item.h4}</h3>
                <p>{item.word}</p>
                </div>
                
              ))}
            </div>
          )
        }
         {firstData.name && (
                    <div className="MehsulFirst">
            <div className="MehsulFirst-img">
              <img src={firstData.img} alt="" />
            </div>
         
            <div className="MehsulFirst-word">
              <h3>{firstData.name}</h3>
              <p>{firstData.title}</p>
              {firstData.titleSecond && (

              <p>{firstData.titleSecond}</p>
              )}
              <button className="Mehsul-Submite">Sifaris et</button>
              <p>
                <strong>{firstData.Mehsul[0]} </strong> <span>{firstData.Mehsul[1]}</span>
              </p>
              {firstData.Stikformati && (
              <p>
                <strong>{firstData.Stikformati[0]}</strong>{" "}
                <span>{firstData.Stikformati[1]}</span>
              </p>

              )}
              {firstData.Tezyig && (
              <p>
                <strong>{firstData.Tezyig[0]} </strong> <span>{firstData.Tezyig[1]}</span>
              </p>

              )}
              {firstData.Icindeki && (
              <p>

                <strong>{firstData.Icindeki[0]}</strong> <span>{firstData.Icindeki[1]}</span>
              </p>

              )}
              {firstData.Material && (
              <p>

                <strong>{firstData.Material[0]}</strong> <span>{firstData.Material[1]}</span>
              </p>

              )}
              {firstData.Xalis && (
              <p>
                <strong>{firstData.Xalis[0]} </strong> <span>{firstData.Xalis[1]}</span>
              </p>

              )}
              {firstData.Davamlilig && (
              <p>
                <strong>{firstData.Davamlilig[0]} </strong>{" "}
                <span>{firstData.Davamlilig[1]}</span>
              </p>
                
              )}
            </div>
          </div>
         )}

        </div>
      </div>

      <section className="Mehsulİtems">
        <h2>Daha çox məhsul kəşf edin</h2>
        <div className="MehsulItem-container">
          {mehsuls.map((item, id) => (
            <>
            {
              item.name && (
                              <div
                onClick={() => setfirstData(item)}
                key={id}
                className="MehsulItem"
              >
                <div className="MehsulItem-word">
                  <h3>{item.name}</h3>
                </div>
                <div className="MehsulItem-img">
                  <img src={item.img} alt="" />
                </div>
                
              </div>
              )
            }

            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Məhsullar