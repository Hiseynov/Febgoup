import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Carusel from '../components/Carusel'
import { dates, mehsuls } from '../data/data'
import Categories from '../components/Categories'
import MehsulCarusel from '../components/MehsulCarusel'
function Home() {
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
                <i className="fa-regular fa-lightbulb"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Innovativ Dizayn</h3>
                  <p>Browse our wide selection of packaging products and find the perfect fit for your needs.</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                <i className="fa-solid fa-oil-well"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Çox yönlü istehsal</h3>
                  <p>Make your packaging unique by uploading your logo and customizing the design to match your brand.</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Place your order</h3>
                  <p>Review your custom packaging details and place your order with confidence.</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                <i className="fa-solid fa-truck-ramp-box"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Place your order</h3>
                  <p>Review your custom packaging details and place your order with confidence.</p>
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
    <h3>Fabrikimiz haqqinda</h3>
    </div>
    <div className="Hakimizda-button">
      <div className="Hakimizda-button-word">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse vero accusamus minima nulla expedita, corporis modi quia nihil. Eveniet quaerat numquam quo cum praesentium excepturi deserunt vel. Tempore, ullam natus dolorum at dolor repellendus! Ipsum odit tenetur, vero dolores quisquam nulla ex explicabo qui exercitationem nemo harum obcaecati accusamus?</p>
      </div>
      <div className="Hakimizda-button-photo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s" alt="" />
      </div>
    </div>
  </div>
</div>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.151245860889!2d49.8676024!3d40.3833404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1a528d7063%3A0x44cfa147f2b3ed7e!2s13a%20Xocal%C4%B1%20prospekti%2C%20Bak%C4%B1!5e0!3m2!1sru!2saz!4v1717523229586!5m2!1sru!2saz"
           width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      </div>

    </section>
    </>
  )
}

export default Home