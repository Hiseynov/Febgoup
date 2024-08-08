import React from 'react'
// import Logo from './Logo'
import LogoWhite from "../img/LogoWhite.png";
import { Link as LinkRouter } from "react-router-dom";
import LinksCategory from './LinksCategory';
function Footer() {
  return (
   <>
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-logo">
        <LinkRouter to={"/"}>
             
              <img src={LogoWhite} alt="White Logo unipage" />
            </LinkRouter>
        </div>
        <div className="footer-categories">
          <LinksCategory></LinksCategory>
        </div>
        <div className="footer-links">
          <div className="footer-linksItem">
            <a href="tel:+994552778701" title='telefonla əlaqə:'><i className="fa-solid fa-phone"></i></a>
          </div>
          <div className="footer-linksItem">
            <a href="mailto:info@febgroup.az" target='_blank' title='info@febgroup.az'><i className="fa-regular fa-envelope"></i></a>
          </div>
          <div className="footer-linksItem">
            <a  href="https://wa.me/994552778701" target='_blank' title='whatsappla əlaqə:'><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
   
   </>
  )
}

export default Footer