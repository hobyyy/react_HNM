import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async() => {
    // let url = `http://localhost:4000/products`;
    let url = `https://my-json-server.typicode.com/hobyyy/react_HNM/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data : ', data)
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  },[]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} md={6} sm={12}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll