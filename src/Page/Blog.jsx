// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useNavigate, Link } from 'react-router-dom';

// function Blog() {
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();
//   const [blogData, setBlogData] = useState([]);
//   // const blogData = [
//   //   { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
//   //   { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
//   //   { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' }
//   // ];
//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + '...';
//     }
//     return text;
//   };
//   const getLocalizedField = (item, field) => {
//     return item[`${field}_${i18n.language}`] || item[`${field}_az`];
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://test.avto-103.com/api/v2/blog/');
//         setBlogData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // navigate("/no-found");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   return (
//     <>
//       <section id='Blog'>
//         <div className="big-title">
//           <h1>{t("bloglarimiz")}</h1>
//         </div>
//         <div className="BlogData-container">
//           {blogData.map((post) => (
//             // <div key={post.id} className="card">
//               <div className='BlogData-item'>
//                 {post.image1 && (
//                   <Link className="BlogData-img"  to={`/blog/${post.id}`}>
//                     <img src={post.image1} alt={getLocalizedField(post,'post_title')} />
//                     {/* <img src={post.image1}/> */}
//                   </Link>
//                 )}
//                 <div className="BlogData-words">
//                   <div className="BlogData-date">
//                   <h3>{getLocalizedField(post, 'post_title')}</h3>
//                   <span>{post.post_date}</span> 
//                   {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
//                   {/* <span>29June 19:05</span> */}
//                   </div>
//                   <div className="BlogData-text">
                   
//                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates molestias dicta blanditiis nesciunt quasi vel velit incidunt, quo saepe?</p> */}
//                     {/* <p>{truncateText("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quo itaque obcaecati accusantium blanditiis accusamus at unde reprehenderit culpa recusandae, voluptate quidem, amet repellendus aliquid quisquam? Ad sit explicabo quibusdam!",150)}</p> */}
                 
                 
//                   <p>{truncateText(getLocalizedField(post, 'post_subtitle'),150)}</p>
//                   {/* <p>{getLocalizedField(post, 'post_article')}</p> */}
//                   </div>
//                   <Link to={`/blog/${post.id}`} className="BlogData-button">
//                       <span>
//                         {t('dahacox')}
//                       </span>
//                     </Link>
//                 </div>
//               </div>
//             // </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Blog;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';

function Blog() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);

  // Функция для обрезки текста
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Функция для получения локализованного поля
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  // useEffect вызывается только один раз при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://test.avto-103.com/api/v2/blog/');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Обработка ошибки, например, редирект на страницу ошибки
        // navigate("/no-found");
      }
    };

    fetchData();
  }, []); // Запуск useEffect только при изменении navigate

  return (
    <section id='Blog'>
      <div className="big-title">
        <h1>{t("bloglarimiz")}</h1>
      </div>
      <div className="BlogData-container">
        {blogData.map((post) => (
          <div key={post.id} className='BlogData-item'>
            {post.image1 && (
              <Link className="BlogData-img" to={`/blog/${post.id}`}>
                <img src={post.image1} alt={getLocalizedField(post, 'post_title')} />
              </Link>
            )}
            <div className="BlogData-words">
              <div className="BlogData-date">
                <h3>{getLocalizedField(post, 'post_title')}</h3>
                <span>{post.post_date}</span>
              </div>
              <div className="BlogData-text">
                <p>{truncateText(getLocalizedField(post, 'post_subtitle'), 150)}</p>
              </div>
              <Link to={`/blog/${post.id}`} className="BlogData-button">
                <span>{t('dahacox')}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
