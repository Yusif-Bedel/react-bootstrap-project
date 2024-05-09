import React from 'react'
import CardItem from '../cardItem/CardItem'
const Card = ({items}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"50px"}}>
      {
        items.map((item,index)=>{
                return(<CardItem key={index} item={item}/>)
            })
      }
    </div>
  )
}

export default Card
