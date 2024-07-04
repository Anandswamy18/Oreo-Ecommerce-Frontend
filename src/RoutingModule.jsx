import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react'
import Oreo from './Components/Oreo/Oreo';
import Ecommerce from './Components/ecommerce/Ecommerce'
import ProductContainer from './Components/ProductContainer/ProductContainer';
import Cart from "./Components/cart/Cart";
const RoutingModule = () => {

    const route= createBrowserRouter([
        {
            path:"/",
            element:<Oreo/>,
            children:[
                {
                    path:'ecommerce',
                    element:<Ecommerce/>,
                    children:[
                        {
                            path:'product',
                            element:<ProductContainer/>
                        },
                        {
                            path:'cart',
                            element:<Cart/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <RouterProvider router={route}> </RouterProvider>
  )
}

export default RoutingModule