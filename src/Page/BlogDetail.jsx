// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import axios from "axios";
// import {Base_url,Api,End_url} from '../api/index'
// import {blog} from '../route_static/index'
// import Loading from "../components/Loading";
// const BlogDetail = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { i18n, t } = useTranslation();
//   const [loadin,setloading] = useState(true)
//   const [blogDataItem, setBlogDataItem] = useState(null);
//   const [blogData, setBlogData] = useState([]);

//   // Fetch specific blog data
//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const response = await axios.get(`${Base_url}${Api}${End_url}/blog/${id}/`);
//         console.log('Blog data item:', response.data);
//         setBlogDataItem(response.data);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//         // Optionally redirect or handle the error silently
//         navigate("/");
//       }
//     };

//     fetchBlogData();
//   }, [id]);

//   // Fetch all blog data
//   useEffect(() => {
//     const fetchAllBlogs = async () => {
//       try {
//         const response = await axios.get(`${Base_url}${Api}${End_url}/blog/`);
//         console.log('All blogs data:', response.data);
//         setBlogData(response.data);
//         setloading(false)
//       } catch (error) {
//         console.error("Error fetching all blogs:", error);
//         setloading(false)
//         // Optionally handle the error silently
//       }
//     };

//     fetchAllBlogs();
//   }, []);

//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
//   };

//   const getLocalizedField = (item, field) => {
//     return item[`${field}_${i18n.language}`] || item[`${field}_az`];
//   };

//   if(loadin){
//     return <Loading></Loading>
//   }

//   return (
//     <section id="BlogDetails">
//       <h1 className="big-title">{t("bloglarimiz")}</h1>
//       <div className="BlogDetails">
//         {/* {blogDataItem.image1 && ( */}
//           <div className="BlogDetails-img">
//             <img
//               src={blogDataItem.image1}
//               alt={getLocalizedField(blogDataItem, "post_title")}
//             />
//           </div>
//         {/* )} */}
//         <div className="BlogDetails-word">
//           <div className="BlogDetails-date">
//             <h3>{getLocalizedField(blogDataItem, "post_title")}</h3>
//             <span>{blogDataItem.post_date}</span>
//           </div>
//           <div className="BlogDetails-text">
//             <p>{getLocalizedField(blogDataItem, "post_subtitle")}</p>
//             <p>{getLocalizedField(blogDataItem, "post_article")}</p>
//           </div>
//         </div>
//         <div className="big-title-container">

//         <h1 className="big-title">{t("oxsar")}</h1>
//         </div>
//         <div className="BlogData-cards">
//           {blogData.map((post) => (
//             <div className="BlogData-card" key={post.id}>
//               <div className="BlogData-card-container">
//                 {/* {post.image1 && ( */}
//                 <div className="BlogData-card-img">
//                   <Link to={`/${blog}/${post.id}`}>
//                     <img
//                       src={post.image1}
//                       alt={getLocalizedField(post, "post_title")}
//                     />
//                   </Link>
//                 </div>
                  
//                 {/* )} */}
//                 <div className="BlogData-card-word">
//                   <div className="BlogData-card-date">
//                     <h3>{getLocalizedField(post, "post_title")}</h3>
//                     <span>{post.post_date}</span>
//                   </div>
//                   <div className="BlogData-card-text">
//                     <p>{truncateText(getLocalizedField(post, "post_subtitle"), 50)}</p>
//                   </div>
//                   <Link to={`/${blog}/${post.id}`} className="BlogData-card-button">
//                     <span>{t('dahacox')}</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogDetail;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Base_url, Api, End_url } from '../api/index';
import { blog } from '../route_static/index';
import Loading from "../components/Loading";
import { truncateText } from '../functions/truncateTexts';
import { replaceTextFormated } from '../functions/replaceTextFormated';

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [blogDataItem, setBlogDataItem] = useState(null);
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState(false);

  // Fetch specific blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/blog/${id}/`);
        if (response.data) {
          console.log('Blog data item:', response.data);
          setBlogDataItem(response.data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  // Fetch all blog data
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`${Base_url}${Api}${End_url}/blog/`);
        console.log('All blogs data:', response.data);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
      }
    };

    fetchAllBlogs();
  }, []);

  const getFullImageUrl = (relativePath) => {
    return `${Base_url}${Api}${relativePath}`;
  };

  // Filter blogData to exclude the current blog post and get up to 6 related blogs
  const relatedBlogs = blogData
    .filter((post) => post.id !== parseInt(id)) // Exclude the current blog
    .slice(0, 7); // Limit to the first 6 blogs

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
    return null; // Render nothing while redirecting
  }

  return (
    <section id="BlogDetails">
      <h1 className="big-title">{t("bloglarimiz")}</h1>
      <div className="BlogDetails">
        <div className="BlogDetails-img">
          <img
            src={getFullImageUrl(blogDataItem.image1)}
            alt={getLocalizedField(blogDataItem, "post_title")}
          />
        </div>
        <div className="BlogDetails-word">
          <div className="BlogDetails-date">
            <h3 dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_title")) }} />
            <span>{blogDataItem.post_date}</span>
          </div>
          <div className="BlogDetails-text">
            <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_subtitle")) }} />
            <p dangerouslySetInnerHTML={{ __html: replaceTextFormated(getLocalizedField(blogDataItem, "post_article")) }} />
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
                  <div className="BlogData-card-text">
                    <p>{truncateText(getLocalizedField(post, "post_subtitle"), 50)}</p>
                  </div>
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
  );
};

export default BlogDetail;
