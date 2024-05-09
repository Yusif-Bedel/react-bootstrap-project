import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const ProductItem = ({item}) => {
  const {data,setData}=useContext(MainContext)
  const deleteItem=(id)=>{
    axios.delete(`http://localhost:3000/products/${id}`).then(res=>setData([...data.filter(x=>x.id != res.data.id)]))
  }
  return (
    <tr>
              <td><img width={"50px"} src={item.image} alt="" /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><i onClick={()=>{
                deleteItem(item.id)
              }} class="fa-solid fa-x"></i></td>
    </tr>
  )
}

export default ProductItem
