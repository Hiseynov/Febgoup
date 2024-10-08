import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Base_url, Api, End_url } from '../api/index';
import { blog } from '../route_static/index';
import Loading from "../components/Loading";
import { truncateText } from '../functions/truncateTexts';
import { replaceTextFormated } from '../functions/replaceTextFormated';
import { Helmet } from "react-helmet";
import { CACHE_EXPIRY } from '../functions/DedlineLocalstoric';
const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [blogDataItem, setBlogDataItem] = useState(null);
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState(false);

  // Fetch all blog data with caching
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const now = Date.now();
        const cachedData = localStorage.getItem('blog_data');
        const cacheTime = localStorage.getItem('blog_data_time');

        if (cachedData && cacheTime && (now - cacheTime < 10 * 60 * 1000)) {
          // Use cached data
          const parsedData = JSON.parse(cachedData);
          setBlogData(parsedData);

          // Find the specific blog item from the cached data
          const filteredBlogItem = parsedData.find((post) => post.id === parseInt(id));
          setBlogDataItem(filteredBlogItem || null);
          setError(false);
        } else {
          // Fetch new data from API
          const response = await axios.get(`${Base_url}${Api}${End_url}/blog/`);
          setBlogData(response.data);

          // Cache new data
          localStorage.setItem('blog_data', JSON.stringify(response.data));
          localStorage.setItem('blog_data_time', now);

          // Find the specific blog item
          const filteredBlogItem = response.data.find((post) => post.id === parseInt(id));
          setBlogDataItem(filteredBlogItem || null);
          setError(false);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, [id]);

  const getFullImageUrl = (relativePath) => {
    return `${Base_url}${Api}${relativePath}`;
  };

  // Filter out the current blog item and get related blogs
  const relatedBlogs = blogData
    .filter((post) => post.id !== parseInt(id)) // Exclude current blog
    .slice(0, 7); // Limit to 7 blogs

  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  useEffect(() => {
    if (error) {
      navigate("/"); // Redirect to home page on error
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!blogDataItem) {
    return null; // Do not render anything if the blog item is not found
  }

  return (
    <>
      <Helmet>
        <title>{t("blog_title")}</title>
        <meta name="description" content={t("title_1mehsul")} />
        <meta property="og:title" content={t("blog_title")} />
        <meta property="og:description" content={t("title_1mehsul")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("blog_title")} />
        <meta name="twitter:description" content={t("title_1mehsul")} />
      </Helmet>
      <section id="BlogDetails">
        <h1 className="big-title">{t("bloglarimiz")}</h1>
        <div className="BlogDetails">
          <div className="BlogDetails-img">
            <img
              src={blogDataItem.image1}
              alt={getLocalizedField(blogDataItem, "post_title")}
            />
          </div>
          <div className="BlogDetails-word">
            <div className="BlogDetails-date">
              <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_title")) }} />
              <span>{blogDataItem.post_date}</span>
            </div>
            <div className="BlogDetails-text">
              {blogDataItem.post_subtitle_az && <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_subtitle")) }} />}
              {blogDataItem.post_article_az && <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_article")) }} />}
            </div>
          </div>
          <div className="big-title-container">
            <h1 className="big-title">{t("oxsar")}</h1>
          </div>
          <div className="BlogData-cards">
            {relatedBlogs.map((post) => (
              <div className="BlogData-card" key={post.id}>
                <div className="BlogData-card-container">
                  <div className="BlogData-card-img">
                    <Link to={`/${blog}/${post.id}`}>
                      <img
                        src={post.image1}
                        alt={getLocalizedField(post, "post_title")}
                      />
                    </Link>
                  </div>
                  <div className="BlogData-card-word">
                    <div className="BlogData-card-date">
                      <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(post, "post_title")) }} />
                      <span>{post.post_date}</span>
                    </div>
                    {
                      post.post_subtitle_az && (
                    <div className="BlogData-card-text">
                      {post.post_subtitle_az && <p>{truncateText(getLocalizedField(post, "post_subtitle"), 50)}</p>}
                    </div>

                      )
                    }
                    <Link to={`/${blog}/${post.id}`} className="BlogData-card-button">
                      <span>{t('dahacox')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
