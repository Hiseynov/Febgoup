import Home from "./Page/Home";
import Məhsullar from "./Page/Məhsullar";
// import Şablon from "./Page/Şablon"
import Blog from "./Page/Blog"
import BlogDetail from "./Page/BlogDetail";
import {mehsul,sablon,blog} from './route_static'

export const routes = [
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: mehsul,
    element: <Məhsullar></Məhsullar>,
  },
  // {
  //   path: sablon,
  //   element: <Şablon></Şablon>
  // },
  {
    path: blog,
    element: <Blog></Blog>
  },
  {
    path: `${blog}/:id`,
    element: <BlogDetail />,
  },
  {
    path:'*',
    element:<Home></Home>
  }
]