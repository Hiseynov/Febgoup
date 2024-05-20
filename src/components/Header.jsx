import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function header() {
  const language = ["Az","Ru","Angl"]
  const [lang,setlang] = useState('Az')
  const [langac,setlangac] = useState(false)
  const langcategories = language.filter(item=> item !=lang)
  return (
    <>
      <div className="Header">
        <div className="Header-container">
                  <div className="header-top">
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
        </div>
        <div className="header-button">
          <div className="header-button-category">
            <ul>
              <li><Link to={"Haqqımızda"}>Haqqımızda</Link></li>
              <li><Link to={"Məhsullar"}>Məhsullar</Link></li>
              <li><Link to={"Şablon"}>Şablon</Link></li>
              <li><Link to={"Blog"}>Blog</Link></li>
              <li><Link to={"Əlaqə"}>Əlaqə</Link></li>
            </ul>
          </div>
          <div className="header-button-change">
            {/* <ul>
              <li><i className="fa-solid fa-magnifying-glass"></i></li>
              <li>Az <i className="fa-solid fa-angle-down"></i></li>
            </ul> */}
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
        </div>

      </div>
    </>
  );
}
