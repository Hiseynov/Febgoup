import React from 'react'
import Logo from './Logo'
import { Link as LinkRouter } from "react-router-dom";
import LinksCategory from './LinksCategory';
function Footer() {
  return (
   <>
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-logo">
        <LinkRouter to={"/"}>
              <Logo></Logo>
            </LinkRouter>
        </div>
        <div className="footer-categories">
          <LinksCategory></LinksCategory>
        </div>
        <div className="footer-links">
          <div className="footer-linksItem">
            <a href="tel:"><i className="fa-solid fa-phone"></i></a>
          </div>
          <div className="footer-linksItem">
            <a href="mailto:"><i className="fa-regular fa-envelope"></i></a>
          </div>
          <div className="footer-linksItem">
            <a  href="https://wa.me/994500000000"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
   
   </>
  )
}

export default Footer