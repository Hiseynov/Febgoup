import React from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { Link as LinkScrool, scroller } from "react-scroll";
function LinksCategory({setactiveBasket}) {
  const ScrollToSection = ({ to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -200
          
        });
      }, 100); // Задержка, чтобы дать времени для перехода
    };

    return (
      <a onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </a>
    );
  };
  return (
    <>
      <ul>
        <li>
          <ScrollToSection 
            // activeClass='active'
            to="Hakimizda"
           
            // spy = {true}
            // smooth={true}
            // duration = {500}
          >
            <span onClick ={()=>setactiveBasket(false)}> Haqqımızda</span>
           
          </ScrollToSection>
        </li>
        <li>
          <LinkRouter to={"Məhsullar"}  onClick ={()=>setactiveBasket(false)}>Məhsullar</LinkRouter>
        </li>
        <li>
          <LinkRouter to={"Şablon"} onClick ={()=>setactiveBasket(false)}>Şablon</LinkRouter>
        </li>
        {/* <li><Link to={"Blog"}>Blog</Link></li> */}
        <li>
          <ScrollToSection to="HomeLogo" >
            <span onClick ={()=>setactiveBasket(false)}>Referanslarimiz</span>
          </ScrollToSection>
        </li>
        <li>
          <ScrollToSection to="contact" >
            <span onClick ={()=>setactiveBasket(false)}>Əlaqə</span>
          </ScrollToSection>
        </li>
      </ul>
    </>
  );
}

export default LinksCategory;
