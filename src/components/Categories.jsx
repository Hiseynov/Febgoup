import React from 'react'

function categories() {
  return (
   <>
               <div className="contact-items">
          <div className="contact-item">
            <i class="fa-solid fa-phone"></i>
            <div className="contact-about">
              <h5>Phone-number</h5>
              <a href="tel:+9940000000">+994 000 00 00</a>
            </div>
          </div>
          <div className="contact-item">
          <i class="fa-regular fa-envelope"></i>
            <div className="contact-about">
              <h5>Email</h5>
              <a href="mailTo:samle.email@gmail.com">samle.email@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
          <i class="fa-brands fa-whatsapp"></i>
            <div className="contact-about">
              <h5>WhatsApp</h5>
              <a href="tel:+9940000000">+994 000 00 00</a>
            </div>
          </div>
          <div className="contact-item">
          <i class="fa-solid fa-location-dot"></i>
            <div className="contact-about">
              <h5>Address</h5>
              <a href="tel:+9940000000">Baki Sheheri, D.Bunyadzade k. 27</a>
            </div>
          </div>

        </div>
   </>
  )
}

export default categories