import React from 'react'
import { useNavigate } from 'react-router'
const ProductCard = ({item}) => {
  const usenavigate = useNavigate();
  const showDetail = () => {
    usenavigate(`/product/${item?.id}`);
  }
  return (
    <div onClick={showDetail}>
      <img className='img-style' src={item?.img}/>
      <div>{item?.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard