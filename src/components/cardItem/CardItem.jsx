import React from 'react'

function CardItem({item}) {

  return (
    <div style={{width:"100px"}} className='cardContainer'>
        <img width={"100px"} src={item.image} alt="" />
        <h4>{item.title}</h4>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span>{item.price}$</span>
            <button>Add</button>
        </div>
    </div>
  )
}

export default CardItem
