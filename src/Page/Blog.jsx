import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import {Base_url,Api,End_url} from '../api/index'
import Loading from '../components/Loading';
import {blog} from '../route_static/index'
import {truncateText} from '../functions/truncateTexts'
import { replaceTextFormated } from '../functions/replaceTextFormated';
function Blog() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const [loadin,setloading] = useState(true)
  // // Функция для обрезки текста
  // const truncateText = (text, maxLength) => {
  //   return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  // };

  // Функция для получения локализованного поля
  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  // useEffect вызывается только один раз при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/blog`);
        setBlogData(response.data);
        setloading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        setloading(false)
        // Обработка ошибки, например, редирект на страницу ошибки
        // navigate("/no-found");
      }
    };

    fetchData();
  }, []); // Запуск useEffect только при изменении navigate

  if(loadin){
    return <Loading></Loading>
  }
  return (
    <section id='Blog'>
      <div className="big-title">
        <h1>{t("bloglarimiz")}</h1>
      </div>
      <div className="BlogData-container">
        {blogData.map((post) => (
          <div key={post.id} className='BlogData-item'>
            {post.image1 && (
              <Link className="BlogData-img" to={`/${blog}/${post.id}`}>
                <img src={post.image1} alt={getLocalizedField(post, 'post_title')} />
              </Link>
            )}
            <div className="BlogData-words">
              <div className="BlogData-date">
                <h3 dangerouslySetInnerHTML={{ __html:replaceTextFormated(getLocalizedField(post, 'post_title'))}} />
                <span>{post.post_date}</span>
              </div>
              <div className="BlogData-text">
                <p dangerouslySetInnerHTML={{ __html:replaceTextFormated(truncateText(getLocalizedField(post, 'post_subtitle'), 150))}} />
              </div>
              <Link to={`/${blog}/${post.id}`} className="BlogData-button">
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
