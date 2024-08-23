import React, { useEffect, useState } from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router';
const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data ', data)
    setProduct(data);
  }  
  useEffect(()=> {
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>\{product?.price.toLocaleString('ko-KR')}</div>
          <select className='product-selectbox'>
            {product?.size.map((data) => (
              <option>{data}</option>
            ))}
          </select>
          <button className='product-button'>추가하기</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail