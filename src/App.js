import './App.css';
import { Routes, Route } from 'react-router';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 2. 전체 상품 페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼 : 로그인 페이지가 나온다.
// 4. 상품을 클릭했을 때, 로그인이 안되어 있을 경우 로그인 페이지가 나온다.
// 5. 로그인이 되어 있을 경우 상품 상세 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 상세 페이지를 볼 수 없고, 다 로그인 페지가 보인다.
// 8. 상품을 검색할 수 있다.
function App() {
  return (
    <div >
      <Routes>
        <Route path="" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
