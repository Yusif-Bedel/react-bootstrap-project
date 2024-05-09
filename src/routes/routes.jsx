import AdminRoot from "../pages/admin/AdminRoot";
import Add from "../pages/admin/add/Add";
import Products from "../pages/admin/products/Products";
import Error from "../pages/error/Error";
import SiteRoot from "../pages/site/SiteRoot";
import Home from "../pages/site/home/Home";
import Shop from "../pages/site/shop/Shop";
const ROUTES = [
    {
        path:"/",
        element:<SiteRoot/>,
        children:[{
            path:"",
            element: <Home/>
        },
        {
            path:"shop",
            element:<Shop/>
        },
        {
            path:"*",
            element:<Error/>
        }
    ],
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[{
            path:"",
            element:<Products/>
        },
        {
            path:"add",
            element:<Add/>
        }
    ]
    }
]

export default ROUTES