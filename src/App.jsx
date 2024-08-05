import { useEffect, useState } from 'react'
import {useLocation, useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from "./components/Header"
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    // useEffect(() => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, [pathname]);
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [pathname]);
  
    return null;
  };
  
  const router = useRoutes(routes);
  return (
    <>
    <ScrollToTop/>
    <Header></Header>
    {router}
    <Footer></Footer>
    </>
  )
}

export default App
