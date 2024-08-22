import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Base_url, Api, End_url} from '../api/index'
import Loading from '../components/Loading';

const LogoMaker = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [selectedDesign, setSelectedDesign] = useState(null);
  const [DizaynData, setDizaynData] = useState([]);
  const [filterdesingId, setFilterdesingId] = useState(1);
  const [selecthis, setSelecthis] = useState(1);
  const [Dizayn, setDizayn] = useState([]);
  const [Mehsular, setMehsular] = useState([]);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [designResponse, productResponse] = await Promise.all([
          axios.get(`${Base_url}${Api}${End_url}/design/`),
          axios.get(`${Base_url}${Api}${End_url}/design/categories/`)
        ]);
        setDizayn(designResponse.data);
        setMehsular(productResponse.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
        // navigate("/no-found");
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    // Фильтрация Dizayn на основе filterdesingId
    const filteredData = Dizayn.filter(item => item.product_category === filterdesingId);
    setDizaynData(filteredData);
  }, [filterdesingId, Dizayn]); // Убедитесь, что Dizayn также добавлен в зависимости

  const { t } = useTranslation();
  if (loading) {
    return <Loading />;
  }
  console.log(DizaynData.length,'as');
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
               
              </ul>
            </div>
            <div className="Sablon-change-category">
              {
              
                selecthis === 1 ? Mehsular.map(product => (
                  <button key={product.id} onClick={() => (setSelectedPhoto(product.template_image), setFilterdesingId(product.id))}>
                    <img src={product.template_image} alt={getLocalizedField(product, 'title')} title={product.category} />
                  </button>
                )) : (DizaynData.length != 0 ? (
                  DizaynData.map(design => (
                    <button key={design.id} onClick={() => (setSelectedPhoto(design.template_image))}>
                      <img src={design.template_image} alt={getLocalizedField(design, 'title')} title={getLocalizedField(design, 'title')} />
                    </button>
                  ))
                ) : 
                <div className="Sablon-downMessages">
                   <div className="Sablonn-down">
                  <p>{t("SablonMessages")}</p>
                </div>
                </div>
               )
                 
                
              }
            </div>
          </div>
          <div className="Sablon-view">
            <div className="SablonView-fon">
              {selectedPhoto && <img src={selectedPhoto} alt="" />}

            </div>
          </div>
        </div>
        <div className="Sablon-button">
          <div className="Sablon-button-container">
            <a href="https://wa.me/994552778701" target='_blank' rel="noopener noreferrer">
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
