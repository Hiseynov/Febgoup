import Blog from "./Page/Blog";
import Haqqımızda from "./Page/Haqqımızda";
import Home from "./Page/Home";
import Məhsullar from "./Page/Məhsullar";
import Əlaqə from "./Page/Əlaqə"
import Şablon from "./Page/Şablon"
import NewsBlock from "./Page/NewsBlock";
import Login from "./Page/Login";
import Register from "./Page/Register";

export const routes = [
    {
        path: "/",
        element: <Home></Home>,
      },
    {
        path: "Haqqımızda",
        element: <Haqqımızda></Haqqımızda>,
      },
    {
        path: "Blog",
        element: <Blog></Blog>,
      },
    {
        path: "Məhsullar",
        element: <Məhsullar></Məhsullar>,
      },
      {
        path:"Əlaqə",
        element:<Əlaqə></Əlaqə>
      },
      {
        path:"Şablon",
        element:<Şablon></Şablon>
      },
      {
        path:"Blog/:id",
        element:<NewsBlock></NewsBlock>
      },
      {
        path:"Login",
        element:<Login></Login>
      },
      {
        path:"Register",
        element:<Register></Register>
      },
]