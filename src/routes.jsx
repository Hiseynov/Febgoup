import Home from "./Page/Home";
import Məhsullar from "./Page/Məhsullar";
import Şablon from "./Page/Şablon"

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
        path:"Şablon",
        element:<Şablon></Şablon>
      },
]