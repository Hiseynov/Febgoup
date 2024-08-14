import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Base_url,Api,End_url} from '../api/index'
import Loading from '../components/Loading';
const LogoMaker = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selecthis, setSelecthis] = useState(1);
  const [customImage, setCustomImage] = useState(null);
  const [Dizayn, setDizayn] = useState([]);
  const [Mehsular, setMehsular] = useState([]);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [loadin,setloading] = useState(true)
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [designResponse, productResponse] = await Promise.all([
          axios.get(`${Base_url}${Api}${End_url}/design/`),
          axios.get(`${Base_url}${Api}${End_url}/products/`)
        ]);
        setDizayn(designResponse.data);
        setMehsular(productResponse.data);
        setloading(false)

      } catch (error) {
        setloading(false)
        // console.error('Error fetching data:', error);
        // navigate("/no-found");
      }
    };

    fetchData();
  }, [navigate]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDownloadPNG = () => {
    if (selectedDesign || customImage) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const productImg = new Image();
      const designImg = new Image();
  
      productImg.crossOrigin = 'anonymous'; // Разрешить кросс-доменные запросы
      designImg.crossOrigin = 'anonymous'; // Разрешить кросс-доменные запросы
  
      let imagesLoaded = 0;
  
      const checkAllImagesLoaded = () => {
        imagesLoaded++;
        if (imagesLoaded === 2) {
          canvas.width = productImg.width;
          canvas.height = productImg.height;
          ctx.drawImage(productImg, 0, 0);
  
          const designScale = 0.5; // 50% от размера продукта
          const designWidth = designImg.width * designScale;
          const designHeight = designImg.height * designScale;
          const x = (canvas.width - designWidth) / 2;
          const y = (canvas.height - designHeight) / 2;
          ctx.drawImage(designImg, x, y, designWidth, designHeight);
  
          const link = document.createElement('a');
          link.download = 'Logo.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        }
      };
  
      productImg.src = selectedProduct;
      productImg.onload = checkAllImagesLoaded;
      productImg.onerror = () => console.error('Failed to load product image');
  
      designImg.src = customImage || selectedDesign;
      designImg.onload = checkAllImagesLoaded;
      designImg.onerror = () => console.error('Failed to load design image');
    } else {
      alert('Выберите продукт или загрузите изображение для создания логотипа');
    }
  };
  
  
  
  // const handleDownloadPNG = () => {
  //   if (selectedDesign || customImage) {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d');
  
  //     const productImg = new Image();
  //     const designImg = new Image();
  
  //     productImg.src =  selectedProduct;
  //     designImg.src =customImage || selectedDesign;
  
  //     productImg.onload = () => {
  //       canvas.width = productImg.width;
  //       canvas.height = productImg.height;
  
  //       // Рисуем изображение продукта
  //       ctx.drawImage(productImg, 0, 0);
  
  //       designImg.onload = () => {
  //         // Определяем размеры дизайна как процент от размера продукта
  //         const designScale = 0.5; // 50% от размера продукта
  //         const designWidth = designImg.width * designScale;
  //         const designHeight = designImg.height * designScale;
  
  //         // Вычисляем координаты для размещения дизайна в центре продукта
  //         const x = (canvas.width - designWidth) / 2;
  //         const y = (canvas.height - designHeight) / 2;
  
  //         // Рисуем уменьшенное изображение дизайна в центре изображения продукта
  //         ctx.drawImage(designImg, x, y, designWidth, designHeight);
  
  //         // Создаем ссылку для скачивания
  //         const link = document.createElement('a');
  //         link.download = 'Logo.png';
  //         link.href = canvas.toDataURL('image/png');
  //         link.click();
  //       };
  //     };
  //   } else {
  //     alert('Выберите продукт или загрузите изображение для создания логотипа');
  //   }
  // };
  
  const { t } = useTranslation();
  if(loadin){
    return <Loading></Loading>
  }
  return (
    <>
      <Helmet>
        <title>'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!</title>
        <meta name="description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
        <meta property="og:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!" />
        <meta property="og:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="'Feb Group' - Paketləmə ilə öz şəxsiyyətinizi yaradın: keyfiyyət və üslub!" />
        <meta name="twitter:description" content="'Feb Group' - Şəxsiyyətinizi yansıdın. Bizim dizayn ekspertlərimizlə birgə, sizi təmsil edən unikal və diqqət çəkici bir ləqəb yaradırıq. Sizin brendiniz bizim mükəmməl dizayn və keyfiyyət standartlarımızla əhatə olunacaq." />
      </Helmet>
      <div className="Sablon">
        <div className="Sablon-container">
          <div className="Sablon-change">
            <div className="Sablon-change-categories">
              <ul>
                <li onClick={() => setSelecthis(1)}>
                  <i className="fa-solid fa-clipboard-check"></i>
                  <span>{t("mehsulsablon")}</span>
                </li>
                <li onClick={() => setSelecthis(2)}>
                  <i className="fa-solid fa-object-ungroup"></i>
                  <span>{t("dizaynsablon")}</span>
                </li>
                <li onClick={() => setSelecthis(3)}>
                  <i className="fa-solid fa-download"></i>
                  <span>{t("logoyuklesablon")}</span>
                </li>
                <li onClick={() => setSelecthis(4)}>
                  <i className="fa-solid fa-download"></i>
                  <span>{t("mehsulyuklesablon")}</span>
                </li>
              </ul>
            </div>
            <div className="Sablon-change-category">
              {
                selecthis === 1 ? Mehsular.map(product => (
                  <button key={product.id} onClick={() => setSelectedProduct(product.template_image)}>
                    <img src={product.template_image} alt={getLocalizedField(product, 'title')} title={getLocalizedField(product, 'title')} />
                  </button>
                )) : selecthis === 2 ? Dizayn.map(design => (
                  <button key={design.id} onClick={() => (setSelectedDesign(design.template_image),setCustomImage(null))}>
                    <img src={design.template_image} alt={getLocalizedField(design, 'title')} title={getLocalizedField(design, 'title')} />
                  </button>
                )) : selecthis === 3 ? (
                  <div className="Sablon-down-container">
                    <div className="Sablonn-down">
                      <i className="fa-solid fa-turn-down"></i>
                      <span>{t("logoyuklesablon")}</span>
                      <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                  </div>
                ) : (
                  <div className="Sablon-down-container">
                    <div className="Sablonn-down">
                      <button onClick={handleDownloadPNG}>
                        <i className="fa-solid fa-turn-down"></i>
                        <span>{t("mehsulyuklesablon")}</span>
                      </button>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="Sablon-view">
            <div className="SablonView-fon">
              {selectedProduct && <img src={selectedProduct} alt="" />}
              <div className="SablonView-dizayn">
                {customImage || selectedDesign ? <img src={customImage || selectedDesign} alt="" /> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="Sablon-button">
          <div className="Sablon-button-container">
          <a href="https://wa.me/994552778701" target='_blank'>
          <i className="fa fa-whatsapp"></i>
            {t("whatsappsifaris")}
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoMaker;