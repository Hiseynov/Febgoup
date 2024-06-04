import React from 'react'
import {Link as LinkScrool,scroller} from 'react-scroll'
import {Link as LinkRouter, useNavigate,} from "react-router-dom";
function LinksCategory() {
    const ScrollToSection = ({ to, children }) => {
        const navigate = useNavigate();
      
        const handleClick = () => {
          navigate('/');
          setTimeout(() => {
            scroller.scrollTo(to, {
              duration: 500,
              delay: 0,
              smooth: 'easeInOutQuart'
            });
          }, 100); // Задержка, чтобы дать времени для перехода
        };
      
        return (
          <a onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
      </a>
      );
      };
  return (
    <>
                  <ul>
              <li><ScrollToSection 
              // activeClass='active' 
              to="Hakimizda"
              // spy = {true}
              // smooth={true}
              // duration = {500}
              >Haqqımızda</ScrollToSection></li>
              <li><LinkRouter to={"Məhsullar"}>Məhsullar</LinkRouter></li>
              <li><LinkRouter to={"Şablon"}>Şablon</LinkRouter></li>
              {/* <li><Link to={"Blog"}>Blog</Link></li> */}
              <li><ScrollToSection 
              to="contact"
              >Əlaqə</ScrollToSection></li>
            </ul>
    </>
  )
}

export default LinksCategory