import React from 'react'
import { useTranslation } from 'react-i18next';

function categories() {
  const { t } = useTranslation();
  return (
   <>
               <div className="contact-items">
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div className="contact-about">
              <h5>{t('telefon')}</h5>
              <a href="tel:+994552778701">+994 55 277 87 01</a>
            </div>
          </div>
          <div className="contact-item">
          <i className="fa-regular fa-envelope"></i>
            <div className="contact-about">
              <h5>{t("email")}</h5>
              <a href="mailTo:office@febgroup.az">office@febgroup.az</a>
            </div>
          </div>
          <div className="contact-item">
          <i className="fa-brands fa-whatsapp"></i>
            <div className="contact-about">
              <h5>WhatsApp</h5>
              <a href="tel:+994552778701">+994 55 277 87 01</a>
            </div>
          </div>
          <div className="contact-item">
          <i className="fa-solid fa-location-dot"></i>
            <div className="contact-about">
              <h5>{t("unvan")}</h5>
              <a>Energetika küg. 3 Kegle qes, Baki</a>
            </div>
          </div>

        </div>
   </>
  )
}

export default categories