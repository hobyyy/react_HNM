import React from 'react'
import { Button, Form, Container } from 'react-bootstrap';

// Form의 특징
// 유저한테 입력받은 정보를 가지고 벡엔드로 보내고 싶을 때
// 로그인을 하는순간 서버에 요청을해서 refresh됌 (redirect랑 뭐가 다르지?)

// Form안에 Button이 있고 Button의 type이 submit이면 
// Button에 onClick으로 이벤트를 주면 안됌 
// Form에 onSubmit으로 이벤트를 줘야함
// refresh를 막아야함 ; event.preventDefault() 꼭쓰기!
const Login = () => {
  const loginUser = (event) => {
    event.preventDefault(); // Form의 refresh를 막는 코드
    console.log('login')
  }
  return (
    <Container className='login-container'>
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login
