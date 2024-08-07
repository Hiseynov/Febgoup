import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import {Base_url,Api,End_url} from '../api/index'
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
        const response = await axios.get(`${Base_url}${Api}${End_url}/blog`);
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
