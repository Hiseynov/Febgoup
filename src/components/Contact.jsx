import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import { useTranslation } from 'react-i18next';

function Contact() {
  const [isFocusedUser, setIsFocusedUser] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedText, setIsFocusedText] = useState(false);
  const [formData, setFormData] = useState({
    user: '',
    subject: '',
    message: ''
  });
  const [statusMessageSucsess, setStatusMessageSucsess] = useState(false);
  // const [statusMessageNida, setStatusMessageNida] = useState(false);
  const [statusMessageError, setStatusMessageError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Устанавливаем таймер для скрытия сообщений
    const timer = setTimeout(() => {
      setStatusMessageSucsess(false);
      // setStatusMessageNida(false);
      setStatusMessageError(false);
    }, 5000);

    // Очистка таймера при обновлении состояния
    return () => clearTimeout(timer);
  }, [statusMessageSucsess, statusMessageError]);

  const handleFocusUser = () => setIsFocusedUser(true);
  const handleBlurUser = () => setIsFocusedUser(false);
  const handleFocusEmail = () => setIsFocusedEmail(true);
  const handleBlurEmail = () => setIsFocusedEmail(false);
  const handleFocusText = () => setIsFocusedText(true);
  const handleBlurText = () => setIsFocusedText(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Простая валидация формы
    if (!formData.user || !formData.subject || !formData.message) {
      setStatusMessageError(t('pleaseFillAllFields')); // Убедитесь, что ключ 'pleaseFillAllFields' есть в файлах перевода
      return;
    }

    if (isSubmitting) return; // Предотвратить повторную отправку

    setIsSubmitting(true);
    setStatusMessageError(false);
    setStatusMessageSucsess(false);

    try {
      const response = await axios.post('https://test.avto-103.com/api/v2/contact/send/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setStatusMessageSucsess(true); // Использование переведенного сообщения
      setFormData({ user: '', subject: '', message: '' }); // Очистка формы после успешной отправки
    } catch (error) {
        setStatusMessageError(true);
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="contact">
        <div className="elage">
          <h3 className="contact-title">{t("elagesaxlayin")}</h3>
          {statusMessageError && <div className="alert-container"><div className="alert alert-danger" role="alert">{t('errorMessage')}</div></div>}
          {statusMessageSucsess && <div className="alert-container"><div className="alert alert-success" role="alert">{t("succsesmesage")}</div></div>}
          <form method='post' onSubmit={handleSubmit}>
            <div className="Contactform-top">
              <div className="ContactInputItem">
                <input
                  type="email"
                  name="user"
                  placeholder={t("emailcontact")}
                  required
                  value={formData.user}
                  onFocus={handleFocusUser}
                  onBlur={handleBlurUser}
                  onChange={handleInputChange}
                  className={isFocusedUser ? 'focused' : ''}
                  disabled={isSubmitting}
                />
              </div>
              <div className="ContactInputItem">
                <input
                  type="text"
                  name="subject"
                  placeholder={t('adcontact')}
                  required
                  value={formData.subject}
                  onFocus={handleFocusEmail}
                  onBlur={handleBlurEmail}
                  onChange={handleInputChange}
                  className={isFocusedEmail ? 'focused' : ''}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="Contactform-center">
              <textarea
                name="message"
                onFocus={handleFocusText}
                onBlur={handleBlurText}
                onChange={handleInputChange}
                value={formData.message}
                className={isFocusedText ? 'focused' : ''}
                placeholder={t("messagecontact")}
                cols="30"
                rows="10"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div className="Contactform-button">
              <button type="submit" disabled={isSubmitting}>{isSubmitting ? t("Sending...") : t("gonder")}</button>
            </div>
          </form>
        </div>

        <div className="contact-wrapper">
          <Categories />
          <div className="contact-map-items">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.445201690104!2d49.898656976010116!3d40.398987171442386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU2LjQiTiA0OcKwNTQnMDQuNCJF!5e0!3m2!1sru!2saz!4v1719489019410!5m2!1sru!2saz"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
