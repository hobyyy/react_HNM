import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동','H&M Home', 'Sale', '지속가능성']
  let [width, setWidth] = useState(0);
  const navigate = useNavigate();
  const buttonLoginLogout = (event) => {
    console.log('gotoLogin', event.target.innerHTML)
    if(event.target.innerHTML==='Login') {
      navigate('/login');
    }else{
      setAuthenticate(!authenticate);
      navigate('/');
    }
  }
  const goMain = () => {
    navigate('/');
  }
  // Enter을 입력한 시점에 검색어를 읽어와서 url을 바꿔준다.
  const search = (event) => {
    if(event.key === 'Enter') {
      let keyword = event.target.value // 입력한 검색어
      // console.log('keyword', event.target.value)
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <div>

      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className='login-button-area'>
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>

        <div className='login-button' onClick={(event) => buttonLoginLogout(event)}>
          <FontAwesomeIcon icon={faUser}/>
          <div>{authenticate === true ? 'Logout' : 'Login'}</div>
        </div>
      </div>
      <div className='nav-section' >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png"
          width={100} 
          onClick={goMain}
        />
      </div>
      <div className='menu-area'>
        <div></div>
        <ul className='menu-list '>
          {menuList.map((menu)=> (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='menu-search'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' onKeyPress={(event) => search(event)}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
