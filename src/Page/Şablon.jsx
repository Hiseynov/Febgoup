import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Dizayn,Mehsular } from '../data/data'
const LogoMaker = () => {
    const [selectedProduct, setSelectedProduct] = useState(1);
    const [selectedDesign, setSelectedDesign] = useState(1);
    const [selecthis,setselecthis] = useState(1)

    // const products = [
    //     { id: 1, name: 'Продукт 1' },
    //     { id: 2, name: 'Продукт 2' },
    //     { id: 3, name: 'Продукт 3' },
    // ];

    // const designs = [
    //     { id: 1, name: 'Дизайн 1' },
    //     { id: 2, name: 'Дизайн 2' },
    //     { id: 3, name: 'Дизайн 3' },
    // ];

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
              {/* <div>
            <h1>Создание логотипа</h1>
            <div>
                <h3>Выберите продукт:</h3>
                {Mehsular.map(product => (
                    <button key={product.id} onClick={() => handleProductSelect(product.id)}>
                       <img src={product.img} alt="" />
                    </button>
                ))}
            </div>
            {selectedProduct && (
                <div>
                    <h3>Выберите дизайн:</h3>
                    {Dizayn.map(design => (
                        <button key={design.id} onClick={() => handleDesignSelect(design.id)}>
                           {design.text}
                        </button>
                    ))}
                    <button onClick={handleDownload}>Скачать логотип</button>
                </div>
            )}
        </div> */}
                      <Helmet>
        <title>Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!</title>
        <meta name="description" content="Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
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
