


// // 3 cu versiya

// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import Loading from '../components/Loading';
// import { useNavigate } from 'react-router-dom';
// import { Base_url, Api, End_url } from '../api/index';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const LogoMaker = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedDesign, setSelectedDesign] = useState(null);
//   const [DizaynData, setDizaynData] = useState([]);
//   const [selecthis, setSelecthis] = useState(1);
//   const [filterdesingId, setFilterdesingId] = useState(1);
//   const [customImage, setCustomImage] = useState(null);
//   const [Dizayn, setDizayn] = useState([]);
//   const [Mehsular, setMehsular] = useState([]);
//   const { i18n } = useTranslation();
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [designResponse, productResponse] = await Promise.all([
//           axios.get(`${Base_url}${Api}${End_url}/design/`),
//           axios.get(`${Base_url}${Api}${End_url}/design/categories/`)
//         ]);
//         setDizayn(designResponse.data);
//         setMehsular(productResponse.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.error('Error fetching data:', error);
//         // navigate("/no-found");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   useEffect(() => {
//     // Фильтрация Dizayn на основе filterdesingId
//     const filteredData = Dizayn.filter(item => item.product_category === filterdesingId);
//     setDizaynData(filteredData);
//   }, [filterdesingId, Dizayn]); // Убедитесь, что Dizayn также добавлен в зависимости

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setCustomImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCreatePDF = () => {
//     if (selectedProduct && (customImage || selectedDesign)) {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       const productImg = new Image();
//       const designImg = new Image();

//       productImg.crossOrigin = 'anonymous'; // Пытаемся обойти CORS

//       let imagesLoaded = 0;

//       const checkAllImagesLoaded = () => {
//         imagesLoaded++;
//         if (imagesLoaded === 2) {
//           canvas.width = productImg.width;
//           canvas.height = productImg.height;
//           ctx.drawImage(productImg, 0, 0);

//           const designScale = 0.5;
//           const designWidth = designImg.width * designScale;
//           const designHeight = designImg.height * designScale;
//           const x = (canvas.width - designWidth) / 2;
//           const y = (canvas.height - designHeight) / 2;
//           ctx.drawImage(designImg, x, y, designWidth, designHeight);

//           canvas.toBlob(blob => {
//             const doc = new jsPDF();

//             // Добавляем логотип
//             const url = URL.createObjectURL(blob);
//             const img = new Image();
//             img.onload = () => {
//               doc.addImage(img, 'PNG', 10, 10, 190, 150);
//               doc.save('logo.pdf');
//             };
//             img.src = url;
//           }, 'image/png');
//         }
//       };

//       productImg.src = selectedProduct;
//       productImg.onload = checkAllImagesLoaded;
//       productImg.onerror = () => console.error('Не удалось загрузить изображение продукта');

//       designImg.src = customImage || selectedDesign;
//       designImg.onload = checkAllImagesLoaded;
//       designImg.onerror = () => console.error('Не удалось загрузить изображение дизайна');
//     } else {
//       alert('Выберите продукт или загрузите изображение для создания логотипа');
//     }
//   };

//   const { t } = useTranslation();

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <Helmet>
//         <title>'Feb Group' - Create Your Identity with Packaging: Quality and Style!</title>
//         <meta name="description" content="'Feb Group' - Create a unique and eye-catching brand identity with our design experts. Your brand will be surrounded by our impeccable design and quality standards." />
//         <meta property="og:title" content="'Feb Group' - Create Your Identity with Packaging: Quality and Style!" />
//         <meta property="og:description" content="'Feb Group' - Create a unique and eye-catching brand identity with our design experts. Your brand will be surrounded by our impeccable design and quality standards." />
//       </Helmet>
//       <div className="Sablon">
//         <div className="Sablon-container">
//           <div className="Sablon-change">
//             <div className="Sablon-change-categories">
//               <ul>
//                 <li onClick={() => setSelecthis(1)}>
//                   <i className="fa-solid fa-clipboard-check"></i>
//                   <span>{t("mehsulsablon")}</span>
//                 </li>
//                 <li onClick={() => setSelecthis(2)}>
//                   <i className="fa-solid fa-object-ungroup"></i>
//                   <span>{t("dizaynsablon")}</span>
//                 </li>
//                 <li onClick={() => setSelecthis(3)}>
//                   <i className="fa-solid fa-download"></i>
//                   <span>{t("logoyuklesablon")}</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="Sablon-change-category">
//               {
//                 selecthis === 1 ? Mehsular.map(product => (
//                   <button key={product.id} onClick={() => setSelectedProduct(product.template_image)}>
//                     <img src={product.template_image} alt={product.title} title={product.title} />
//                   </button>
//                 )) : selecthis === 2 ? DizaynData.map(design => (
//                   <button key={design.id} onClick={() => (setSelectedDesign(design.template_image), setCustomImage(null))}>
//                     <img src={design.template_image} alt={design.title} title={design.title} />
//                   </button>
//                 )) : (
//                   <div className="Sablon-down-container">
//                     <div className="Sablonn-down">
//                     <i className="fa-solid fa-turn-down"></i>
//                       <span>{t("logoyuklesablon")}</span>
//                       <input type="file" accept="image/*" onChange={handleFileChange} />
//                     </div>
//                   </div>
//                 )
//               }
//             </div>
//           </div>
//           <div className="Sablon-view">
//             <div className="SablonView-fon">
//               {selectedProduct && <img src={selectedProduct} alt="Selected Product" />}
//               <div className="SablonView-dizayn">
//                 {customImage || selectedDesign ? <img src={customImage || selectedDesign} alt="Selected Design" /> : null}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Sablon-button">
//           <button onClick={handleCreatePDF}>
//             <i className="fa fa-file-pdf"></i> {t("Create PDF")}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LogoMaker;
