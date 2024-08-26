import React, { useState, useEffect } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { mehsul, sablon, blog } from '../route_static/index';

function LinksCategory() {
  const [scrollTo, setScrollTo] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Прокрутка к секции после загрузки страницы
  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 100, // Увеличиваем время для более плавного эффекта
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -150, // Подстройте значение по необходимости
        });
        setScrollTo(""); // Сброс состояния после прокрутки
      }, 300); // Задержка для надежности
      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  const ScrollToSection = ({ to, children }) => {
    const handleClick = (event) => {
      event.preventDefault(); // Предотвращает стандартное действие ссылки
      navigate("/"); // Навигация на главную страницу
      setScrollTo(to); // Установка секции для прокрутки
    };

    return (
      <a href="#" onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </a>
    );
  };

  return (
    <>
      <ul>
        <li>
          <ScrollToSection to="Hakimizda">
            <span onClick={() => setActiveBasket(false)}>{t("haqqimizda")}</span>
          </ScrollToSection>
        </li>
        <li>
          <LinkRouter to={mehsul} onClick={() => setActiveBasket(false)}>
            {t("mehsullar")}
          </LinkRouter>
        </li>
        {/* <li>
          <LinkRouter to={sablon} onClick={() => setActiveBasket(false)}>
            {t("sablon")}
          </LinkRouter>
        </li> */}
        <li>
          <LinkRouter to={blog} onClick={() => setActiveBasket(false)}>
            {t("blog")}
          </LinkRouter>
        </li>
        <li>
          <ScrollToSection to="HomeLogo">
            <span onClick={() => setActiveBasket(false)}>{t("referanslar")}</span>
          </ScrollToSection>
        </li>
        <li>
          <ScrollToSection to="contact">
            <span onClick={() => setActiveBasket(false)}>{t("elaqe")}</span>
          </ScrollToSection>
        </li>
      </ul>
    </>
  );
}

export default LinksCategory;
