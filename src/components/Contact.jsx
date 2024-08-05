import React, { useState } from 'react';
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
  const [statusMessageSucsess, setStatusMessageSucsess] = useState('');
  const [statusMessageNida, setStatusMessageNida] = useState('');
  const [statusMessageError, setStatusMessageError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setStatusMessageError('Пожалуйста, заполните все поля.');
      return;
    }
  
    if (isSubmitting) return; // Предотвратить повторную отправку
  
    setIsSubmitting(true);
    setStatusMessageError('');
    setStatusMessageNida('');
    setStatusMessageSucsess('');
  
    try {
      const response = await axios.post('https://test.avto-103.com/api/v2/contact/send/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success response:', response.data);
      setStatusMessageSucsess('Форма успешно отправлена.');
      setFormData({ user: '', subject: '', message: '' }); // Очистка формы после успешной отправки
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        setStatusMessageError(`Ошибка при отправке формы: ${error.response.data.detail || 'Попробуйте еще раз.'}`);
      } else if (error.request) {
        console.error('Error request:', error.request);
        setStatusMessageNida('Ошибка при отправке формы. Нет ответа от сервера.');
      } else {
        console.error('Error message:', error.message);
        setStatusMessageError(`Ошибка при отправке формы: ${error.message}`);
      }
    }
  
    setIsSubmitting(false);
  };
  
  const { t } = useTranslation();
  return (
    <>
      <div className="contact">
        <div className="elage">
          <h3 className="contact-title">{t("elagesaxlayin")}</h3>
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
          {statusMessageError && <div class="alert alert-danger" role="alert">{statusMessageError}</div>}
          {statusMessageNida &&<div class="alert alert-warning" role="alert">{statusMessageNida}</div>}
          {statusMessageSucsess && <div class="alert alert-success" role="alert">{statusMessageSucsess}</div>}
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
