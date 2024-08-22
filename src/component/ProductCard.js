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
      <div className='blink'>{item?.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price.toLocaleString('ko-KR')}</div>
      <div className='new-text'>{item?.new == true ? "NEW" : ""}</div>
    </div>
  )
}

export default ProductCard