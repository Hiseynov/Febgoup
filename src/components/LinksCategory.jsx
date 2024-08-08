import React from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { Link as LinkScroll, scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import {mehsul,sablon,blog} from '../route_static/index'
function LinksCategory({ setactiveBasket }) {
  const ScrollToSection = ({ to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -200,
        });
      }, 100); // Задержка, чтобы дать времени для перехода
    };

    return (
      <a onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </a>
    );
  };

  const { t } = useTranslation();

  return (
    <>
      <ul>
        <li>
          <ScrollToSection to="Hakimizda">
            <span onClick={() => setactiveBasket(false)}>{t("haqqimizda")}</span>
          </ScrollToSection>
        </li>
        <li>
          <LinkRouter to={mehsul} onClick={() => setactiveBasket(false)}>
            {t("mehsullar")}
          </LinkRouter>
        </li>
        <li>
          <LinkRouter to={sablon} onClick={() => setactiveBasket(false)}>
            {t("sablon")}
          </LinkRouter>
        </li>
        <li>
          <LinkRouter to={blog} onClick={() => setactiveBasket(false)}>
            {t("blog")}
          </LinkRouter>
        </li>
        <li>
          <ScrollToSection to="HomeLogo">
            <span onClick={() => setactiveBasket(false)}>{t("referanslar")}</span>
          </ScrollToSection>
        </li>
        <li>
          <ScrollToSection to="contact">
            <span onClick={() => setactiveBasket(false)}>{t("elaqe")}</span>
          </ScrollToSection>
        </li>
      </ul>
    </>
  );
}

export default LinksCategory;
