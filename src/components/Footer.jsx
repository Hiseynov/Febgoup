import React from 'react'
import Logo from './Logo'
import { Link } from "react-router-dom";
function Footer() {
  return (
   <>
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-logo">
          <Logo></Logo>
        </div>
        <div className="footer-categories">
          <div className="footer-category">
            <Link to={'/Haqqımızda'}>Haqqimizda</Link>
          </div>
          <div className="footer-category">
            <Link to={'/Məhsullar'}>Məhsullar</Link>
          </div>
          <div className="footer-category">
            <Link to={'/Blog'}>Blog</Link>
          </div>
          <div className="footer-category">
            <Link to={'/Şablon'}>Şablon</Link>
          </div>
          <div className="footer-category">
            <Link to={'/Əlaqə'}>Əlaqə</Link>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-linksItem">
            <a href="tel:"><i className="fa-solid fa-phone"></i></a>
          </div>
          <div className="footer-linksItem">
            <a href="mailto:"><i className="fa-regular fa-envelope"></i></a>
          </div>
          <div className="footer-linksItem">
            <a href="https://api.whatsapp.com/send?phone="><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
   
   </>
  )
}

export default Footer