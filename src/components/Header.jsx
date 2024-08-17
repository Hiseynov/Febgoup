import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link as LinkScroll, scroller } from "react-scroll";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import LinksCategory from "./LinksCategory";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "En" },
    { code: "ru", lang: "Ru" },
    { code: "az", lang: "Az" },
  ];
  
  const [lang, setLang] = useState(i18n.language);
  // console.log(i18n.language,'d');
  const [langActive, setLangActive] = useState(false);
  const [activeBasket, setActiveBasket] = useState(false);

  const langCategories = languages.filter((item) => item.lang !== lang);

  const changeLanguage = (item) => {
    i18n.changeLanguage(item.code);
    setLang(item.lang);
    setLangActive(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setLang(savedLanguage.charAt(0).toUpperCase() + savedLanguage.slice(1).toLowerCase());
    }
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => {
      const verticalScroll = window.scrollY;
      const sticky = document.querySelector(".Header");

      if (verticalScroll > 100) {
        sticky.classList.add("is-sticky");
      } else {
        sticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const verticalScroll = window.scrollY;
      const sticky = document.querySelector(".headerMobile");

      if (verticalScroll > 80) {
        sticky.classList.add("is-sticky");
      } else {
        sticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     
      <header id="Header">
        <nav className="HeaderTop">
          <div className="HeaderTop-container">
            <div className="HeaderTop-container-left">
              <h1>Feb Group Azerbaijan - Keyfiyyətin təmsilçisi</h1>
            </div>
            <div className="HeaderTop-container-right">
              <ul className="HeaderTop-elage">
                <li>
                  <span><i className="fa-solid fa-phone"></i></span>
                  <a href="tel:+994552778701" title='telefonla əlaqə:'>+994 (55) 277 87 01</a>
                </li>
                <li>
                  <span><i className="fa-regular fa-envelope"></i></span>
                  <a href="mailto:info@febgroup.az" target='_blank' title='info@febgroup.az'>info@febgroup.az</a>
                </li>
              </ul>
              <ul className="HeaderTop-social">
                <li><a href="https://www.instagram.com/febgroup.az/?igsh=ZzhuNTZrd2dhNHRr" target='_blank'><i className='fa-brands fa-instagram'></i></a></li>
                <li><a href="https://www.facebook.com/people/Febgroup/61559071336630/?mibextid=ZbWKwL" target='_blank'><i className='fa-brands fa-facebook-f'></i></a></li>
                <li><a href="https://www.linkedin.com/company/febgroupaz/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="Header">
          <nav className="Header-container">
            <div className="Header-container-left">
              <LinkRouter to={"/"}>
                <Logo />
              </LinkRouter>
            </div>
            <div className="Header-container-center">
              <LinksCategory />
            </div>
            <div className="Header-container-right">
              <div className="Header-whatsap">
                <a href="https://wa.me/994552778701" target='_blank'>
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
              <div className="Header-language">
                <p onClick={() => setLangActive(!langActive)}>
                  {lang}
                  <i className={`fa-solid fa-angle-down ${langActive ? "rotate" : ""}`}></i>
                </p>
                {langActive && (
                  <ul>
                    {langCategories.map((item, id) => (
                      <li key={id} onClick={() => changeLanguage(item)}>
                        {item.lang}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </nav>
      </header>
      <header id="headerMobile">
        <nav className="HeaderTopMobile">
          <div className="HeaderTopMobile-container">
            <ul>
            <li><a href="https://www.instagram.com/febgroup.az/?igsh=ZzhuNTZrd2dhNHRr" target='_blank'><i className='fa-brands fa-instagram'></i></a></li>
                <li><a href="https://www.facebook.com/people/Febgroup/61559071336630/?mibextid=ZbWKwL" target='_blank'><i className='fa-brands fa-facebook-f'></i></a></li>
                <li><a href="https://www.linkedin.com/company/febgroupaz/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </nav>
        <nav className="headerMobile">
          <div className="headerMobile-container">
            <div className="headerMobile-logo">
              <LinkRouter to={"/"}>
                <Logo />
              </LinkRouter>
            </div>
            <div className="headerMobile-burgermenu">
              <div onClick={() => setActiveBasket(!activeBasket)} className={`BasketMenu ${activeBasket ? "basketActive" : ""}`}>
                <span className="basket-left basket"></span>
                <span className="basket-center basket"></span>
                <span className="basket-right basket"></span>
              </div>
              <div className={`MenuText ${activeBasket ? "" : "hidden"}`}>
                <div className="MenuText-top">
                  <div className="Header-whatsap">
                    <a href="https://wa.me/994500000000">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </div>
                  <div className="Header-language">
                    <p onClick={() => setLangActive(!langActive)}>
                      {lang}{" "}
                      <i className={`fa-solid fa-angle-down ${langActive ? "rotate" : ""}`}></i>
                    </p>
                    {langActive && (
                      <ul>
                        {langCategories.map((item, id) => (
                          <li key={id} onClick={() => changeLanguage(item)}>
                            {item.lang}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="MenuText-button">
                  <LinksCategory setActiveBasket={setActiveBasket} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    
    </>
  );
};

export default Header;
