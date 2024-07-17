import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
// import { Dizayn,Mehsular } from '../data/data'
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";
import product4 from "../img/product4.png";
import brand1 from "../img/brand1.png";
import brand2 from "../img/brand2.png";
import brand3 from "../img/brand3.png";
const LogoMaker = () => {
    const [selectedProduct, setSelectedProduct] = useState(1);
    const [selectedDesign, setSelectedDesign] = useState(1);
    const [selecthis,setselecthis] = useState(1)

    const Mehsular =[
      {
        id:1,
        img:product1
      },
      {
        id:2,
        img:product2
      },
      {
        id:3,
        img:product3
      },
      {
        id:4,
        img:product4
      },

    ];
    
    const Dizayn =[
      {
        id:1,
        img:brand1
      },
      {
        id:2,
        img:brand2
      },
      {
        id:3,
        img:brand3
      },
    ];
    const handleProductSelect = (productId) => {
        setSelectedProduct(productId);
        // setSelectedDesign(null); // Сбросить выбранный дизайн при выборе нового продукта
    };

    const handleDesignSelect = (designId) => {
        setSelectedDesign(designId);
    };

    const handleDownload = () => {
        if (selectedProduct && selectedDesign) {
            // Здесь можно добавить логику для скачивания готового логотипа
            alert(`Готовый логотип для продукта ${selectedProduct} с дизайном ${selectedDesign} скачан`);
        } else {
            alert('Выберите продукт и дизайн для создания логотипа');
        }
    };

    return (
      <>
                      <Helmet>
        <title>'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!</title>
        <meta name="description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
        <meta property="og:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!"/>
        <meta property="og:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!"/>
        <meta name="twitter:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq."/>
        {/* Другие метатеги */}
      </Helmet>
        <div className="Sablon">
          <div className="Sablon-container">
            <div className="Sablon-change">
              <div className="Sablon-change-categories">
                <ul>
                  <li onClick={()=>setselecthis(1)}>
                  <i className="fa-solid fa-clipboard-check"></i>
                    <span>Məhsul</span></li>
                  <li onClick={()=>setselecthis(2)}>
                  <i className="fa-solid fa-object-ungroup"></i>
                  <span>Dizayn</span> </li>
                  <li onClick={()=>setselecthis(3)}>
                  <i className="fa-solid fa-download"></i> <span>Logo Yuklə</span> </li>
                </ul>
              </div>
              <div className="Sablon-change-category">
                {
                  selecthis === 1 ? Mehsular.map(product => (
                    <button key={product.id} onClick={() => handleProductSelect(product.id)}>
                       <img src={product.img} alt="" />
                    </button>
                )): selecthis === 2 ? Dizayn.map(design => (
                  <button key={design.id} onClick={() => handleDesignSelect(design.id)}>
                     <img src={design.img} alt="" />

                  </button>
              )) : (
                <div className="Sablon-down">
                  <button onClick={handleDownload}>
                  <i className="fa-solid fa-turn-down"></i>
                    <span>Logonu Yüklə</span>
                    </button>
                </div>
              )
                }
              </div>
            </div>
            <div className="Sablon-view">
              <div className="SablonView-fon">
                <img src={Mehsular[selectedProduct-1].img} alt="" />
                <div className="SablonView-dizayn">
                  <img src={Dizayn[selectedDesign-1].img} alt="" />
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </>

    );
};

export default LogoMaker;
