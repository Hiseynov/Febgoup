// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// // import { blogData } from './Blog';
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import axios from "axios";

// const BlogDetail = () => {
//   const navigate = useNavigate();
// //   const blogData = [
// //     { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', 
// //     image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', 
// //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
// //     { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
// //     { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
// //     { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' },
// //     { id: 3, title: 'Third Blog Post', content: 'This is the content of the third blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' }
// //   ];
// //   const blogDataItem =  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', image1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus laboriosam distinctio consequatur ducimus esse, similique maxime ipsum voluptatum officiis in itaque fugit quo quas libero nobis deleniti.' }
//   // const handleClick = (id) => {
//   //     navigate(`/blog/${id}`);
//   // };
//   const [blogDataItem, setBlogDataItem] = useState(null);
//   const { id } = useParams();

//   const { i18n } = useTranslation();
// //   useEffect(() => {
// //     // Find the blog item with the matching id
// //     // const item = blogData.filter((item) => item.id === id);
// //     setBlogDataItem(blogData[id]);
// //   }, [id]);
//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + '...';
//     }
//     return text;
//   };
// // if (!blogDataItem) {
// //     return <p>Loading...</p>;
// //   }
  
//   const [blogData, setBlogData] = useState([]);
//   const getLocalizedField = (item, field) => {
//     return item[`${field}_${i18n.language}`] || item[`${field}_az`];
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://test.avto-103.com/api/v2/blog/${id}/`
//         );
//         setBlogDataItem(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // navigate("/no-found");
//       }
//     };

//     fetchData();
//   }, [id, navigate]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://test.avto-103.com/api/v2/blog/"
//         );
//         setBlogData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // navigate("/no-found");
//       }
//     };

//     fetchData();
//   }, [navigate]);
//   // const post = blogData.find(post => post.id == id);

//   // if (!post) {
//   //     return <h2>Post not found</h2>;
//   // }
//   const { t } = useTranslation();
//   return (
//     <>
//       <section id="BlogDetails">
//         <h1 className="big-title">{t("bloglarimiz")}</h1>
//         <div className="BlogDetails">
//           {blogDataItem.image1 && (
//             <div className="BlogDetails-img">
//               <img
//                 src={blogDataItem.image1}
//                 alt={getLocalizedField(blogDataItem, "post_title")}
//               />
//             </div>
//           )}
//             {/* <div className="BlogDetails-img">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx6cU4TZ8QJiJhDWcefhDtuw4We5_upqXww&s"
//                 // alt={getLocalizedField(blogDataItem, "post_title")}
//               />
//             </div> */}
//           <div className="BlogDetails-word">
//           <div className="BlogDetails-date"> 
//                   <h3>{getLocalizedField(blogDataItem, "post_title")}</h3>
//                   <span>{blogDataItem.post_date}</span> 
//                   {/* <h3>Lorem ipsum dolor sit amet.</h3> */}
//                   {/* <span>29June 19:05</span> */}
//                   </div>
//                   <div className="BlogDetails-text">
//                     <p>{getLocalizedField(blogDataItem, "post_subtitle")}</p>
//                     <p>{getLocalizedField(blogDataItem, "post_article")}</p>
//                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempore dolorum temporibus deserunt repellat corrupti autem ipsa assumenda voluptatum at.</p> */}
//                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates molestias dicta blanditiis nesciunt quasi vel velit incidunt, quo saepe?</p> */}
                 
//                   </div>
           
           
//           </div>
//           {/* <h2>{blogDataItem.title}</h2>
//                     <p>{blogDataItem.content}</p>
//                     <img src={blogDataItem.image} alt={blogDataItem.title} />
//                     <p>{blogDataItem.description}</p>
//                     <p>{blogDataItem.description}</p> */}
//         </div>
//         <h1 className="big-title">{t("oxsar")}</h1>
//         <div className="BlogData-cards">
//           {blogData.map((post) => (
//             <div className="BlogData-card" key={post.id}>
//               {/* <Link to={`/blog/${post.id}`}> */}
//                 <div className="BlogData-card-container">
//                  <Link to={`/blog/${post.id}`} className="BlogData-card-img">
//                  {post.image1 && (
//                       <img
//                         src={post.image1}
//                         alt={getLocalizedField(post, "post_title")}
//                       />
//                   )}
//                  </Link>
//                  <div className="BlogData-card-word">
//                     <div className="BlogData-card-date"> 
//                     {/* <h3>{post.title}</h3> */}
//                   {/* <strong>29June 19:05</strong> */}
//                   <h3>{getLocalizedField(post, "post_title")}</h3>
//                   <span>{post.post_date}</span>
//                     </div>
//                     <div className="BlogData-card-text">
//                     <p>{truncateText(getLocalizedField(post, "post_subtitle"),50)}</p>
//                   {/* <p>{truncateText(post.description,50)}</p> */}

//                     </div>
//                     <Link to={`/blog/${post.id}`} className="BlogData-card-button">
//                       <span>{t('dahacox')} </span>

//                     </Link>
//                  </div>
                  
      
//                   {/* <p>{getLocalizedField(post, "post_subtitle")}</p> */}
//                   {/* <p>{getLocalizedField(post, "post_article")}</p> */}
//                 </div>
//               {/* </Link> */}
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default BlogDetail;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const [blogDataItem, setBlogDataItem] = useState(null);
  const [blogData, setBlogData] = useState([]);

  // Fetch specific blog data
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        console.log(id, 'Fetching blog data');
        const response = await axios.get(`https://test.avto-103.com/api/v2/blog/${id}/`);
        console.log('Blog data item:', response.data);
        setBlogDataItem(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        // Optionally redirect or handle the error silently
        // navigate("/no-found");
      }
    };

    fetchBlogData();
  }, [id]);

  // Fetch all blog data
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get("https://test.avto-103.com/api/v2/blog/");
        console.log('All blogs data:', response.data);
        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        // Optionally handle the error silently
      }
    };

    fetchAllBlogs();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const getLocalizedField = (item, field) => {
    return item[`${field}_${i18n.language}`] || item[`${field}_az`];
  };

  if (!blogDataItem) {
    return <p>Loading...</p>; // Display a loading message while data is being fetched
  }

  return (
    <section id="BlogDetails">
      <h1 className="big-title">{t("bloglarimiz")}</h1>
      <div className="BlogDetails">
        {/* {blogDataItem.image1 && ( */}
          <div className="BlogDetails-img">
            <img
              src={blogDataItem.image1}
              alt={getLocalizedField(blogDataItem, "post_title")}
            />
          </div>
        {/* )} */}
        <div className="BlogDetails-word">
          <div className="BlogDetails-date">
            <h3>{getLocalizedField(blogDataItem, "post_title")}</h3>
            <span>{blogDataItem.post_date}</span>
          </div>
          <div className="BlogDetails-text">
            <p>{getLocalizedField(blogDataItem, "post_subtitle")}</p>
            <p>{getLocalizedField(blogDataItem, "post_article")}</p>
          </div>
        </div>
        <div className="big-title-container">

        <h1 className="big-title">{t("oxsar")}</h1>
        </div>
        <div className="BlogData-cards">
          {blogData.map((post) => (
            <div className="BlogData-card" key={post.id}>
              <div className="BlogData-card-container">
                {/* {post.image1 && ( */}
                <div className="BlogData-card-img">
                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.image1}
                      alt={getLocalizedField(post, "post_title")}
                    />
                  </Link>
                </div>
                  
                {/* )} */}
                <div className="BlogData-card-word">
                  <div className="BlogData-card-date">
                    <h3>{getLocalizedField(post, "post_title")}</h3>
                    <span>{post.post_date}</span>
                  </div>
                  <div className="BlogData-card-text">
                    <p>{truncateText(getLocalizedField(post, "post_subtitle"), 50)}</p>
                  </div>
                  <Link to={`/blog/${post.id}`} className="BlogData-card-button">
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
