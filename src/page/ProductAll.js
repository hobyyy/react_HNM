import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async() => {
    let searchQuery = query.get('q')||'';
    // console.log('query값은 ?', searchQuery);
    // let url = `http://localhost:4000/products`;
    let url = `https://my-json-server.typicode.com/hobyyy/react_HNM/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data : ', data)
    setProductList(data);
  }
  useEffect(() => {
    getProducts();
  },[query]);
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