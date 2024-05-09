import React, { useContext } from "react";
import "./Products.css";
import MainContext from "../../../context/context";
import Product from "../product/Product";
import Loading from '../../loading/Loading'
const Products = () => {
    const {data,loading}=useContext(MainContext)
  return (
    <div>
        {
            loading ? <Loading/> : <Product items={data}/>
        }
    </div>
  );
};


export default Products;
