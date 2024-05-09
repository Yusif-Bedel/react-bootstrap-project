import React from 'react'
import ProductItem from '../productItem/ProductItem'
const Product = ({items}) => {
  return (
    <div className="table">
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
            items.map((item,index)=>{
                return(<ProductItem key={index} item={item}/>)
            })
        }

      </tbody>
    </table>
  </div>
  )
}

export default Product
