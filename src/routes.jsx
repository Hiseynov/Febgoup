import Home from "./Page/Home";
import Məhsullar from "./Page/Məhsullar";
import Şablon from "./Page/Şablon"
import Blog from "./Page/Blog"
import BlogDetail from "./Page/BlogDetail";


export const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "Məhsullar",
    element: <Məhsullar></Məhsullar>,
  },
  {
    path: "Şablon",
    element: <Şablon></Şablon>
  },
  {
    path: "blog",
    element: <Blog></Blog>
  },
  {
    path: "blog/:id",
    element: <BlogDetail />,
  }
]