import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import {Link as LinkScrool,scroller} from 'react-scroll'
import {Link as LinkRouter, useNavigate,} from "react-router-dom";
import LinksCategory from "./LinksCategory";
export default function header() {
  const language = ["Az","Ru","Angl"]
  const [lang,setlang] = useState('Az')
  const [langac,setlangac] = useState(false)
  const langcategories = language.filter(item=> item !=lang)
  const ScrollToSection = ({ to, children }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      }, 100); // Задержка, чтобы дать времени для перехода
    };
  
    return (
      <a onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
  </a>
  );
  };
  return (
    <>
    <header id="Header">
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
                <a href="https://wa.me/994500000000">
                    <i className='fa fa-whatsapp'></i>
                </a>
            </div>
        <div className="Header-language">
                    <p  onClick={() => setlangac(!langac)}>{lang} <i  className={`fa-solid fa-angle-down ${langac? 'rotate':''}`}></i></p>
            {langac && (
                 <ul>
                              {
                                langcategories.map((item)=>(
                                  <li onClick={()=>(setlang(item),setlangac(false))}>{item}</li>
                                ))
                              }
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

    </>
  );
}
