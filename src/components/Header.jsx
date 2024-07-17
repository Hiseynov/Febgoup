import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "./Logo";
import { Link as LinkScrool, scroller } from "react-scroll";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import LinksCategory from "./LinksCategory";
export default function header() {
  const language = ["Az", "Ru", "Angl"];
  const [lang, setlang] = useState("Az");
  const [langac, setlangac] = useState(false);
  const langcategories = language.filter((item) => item != lang);
  const [activeBasket, setactiveBasket] = useState(false);
  const ScrollToSection = ({ to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }, 100); // Задержка, чтобы дать времени для перехода
    };

    return (
      <a onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </a>
    );
  };
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const verticalScroll = window.scrollY;
      const sticky = document.querySelector(".headerMobile");

      if (verticalScroll > 100) {
        sticky.classList.add("is-sticky");
      } else {
        sticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              <li><span><i className="fa-solid fa-phone"></i></span><a href="tel:+994552778701" title='telefonla əlaqə:'>+994 (55) 277 87 01</a></li>
              <li><span><i className="fa-regular fa-envelope"></i></span> <a href="mailto:info@febgroup.az" target='_blank' title='info@febgroup.az'>info@febgroup.az</a></li>
            </ul>
            <ul className="HeaderTop-social">
              <li><a href=""> <i className='fa-brands fa-instagram'></i></a></li>
              <li><a href=""> <i className='fa-brands fa-facebook-f'></i></a></li>
              <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          </div>
        </nav>
        <nav className="Header">
          <nav className="Header-container">
            <div className="Header-container-left">
              <LinkRouter to={"/"}>
                <Logo></Logo>
              </LinkRouter>

            </div>
            <div className="Header-container-center">
              <LinksCategory></LinksCategory>
            </div>
            <div className="Header-container-right">
              <div className="Header-whatsap">
                <a href="https://wa.me/994552778701" target='_blank'>
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
              <div className="Header-language">
                <p onClick={() => setlangac(!langac)}>
                  {lang}{" "}
                  <i
                    className={`fa-solid fa-angle-down ${
                      langac ? "rotate" : ""
                    }`}
                  ></i>
                </p>
                {langac && (
                  <ul>
                    {langcategories.map((item,id) => (
                      <li key={id} onClick={() => (setlang(item), setlangac(false))}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {/* <div className="header-top">
          <div className="header-top-logo">
            <Link to={"/"}>
              <Logo></Logo>
            </Link>
          </div>
          <div className="header-top-word">
            <ul>
              <Link to={"Login"} className="Acount">
                My Account <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
              <li className="SifarisEt">SİFARİŞ ET</li>
            </ul>
          </div>
        </div> */}
          </nav>
        </nav>
      </header>
      <header id="headerMobile">
      <nav className="HeaderTopMobile">
          <div className="HeaderTopMobile-container">
            <ul>
              <li><a href=""> <i className='fa-brands fa-instagram'></i></a></li>
              <li><a href=""> <i className='fa-brands fa-facebook-f'></i></a></li>
              <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </nav>
        <nav className="headerMobile">
          <div className="headerMobile-container">
                      <div className="headerMobile-logo">
            <LinkRouter to={"/"}>
              <Logo></Logo>
            </LinkRouter>
          </div>
          <div className="headerMobile-burgermenu">
            <div
              onClick={() => setactiveBasket(!activeBasket)}
              className={`BasketMenu ${activeBasket ? "basketActive" : ""}`}
            >
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
                  <p onClick={() => setlangac(!langac)}>
                    {lang}{" "}
                    <i
                      className={`fa-solid fa-angle-down ${
                        langac ? "rotate" : ""
                      }`}
                    ></i>
                  </p>
                  {langac && (
                    <ul>
                      {langcategories.map((item) => (
                        <li onClick={() => (setlang(item), setlangac(false))}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="MenuText-button">
                <LinksCategory setactiveBasket={setactiveBasket}></LinksCategory>
              </div>
            </div>
          </div>
          </div>

        </nav>
      </header>
    </>
  );
}
