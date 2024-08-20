import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동','H&M Home', 'Sale', '지속가능성']
  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser}/>
          <div>Login</div>
        </div>
      </div>
      <div className='nav-section'>
        <img
          width={100} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png"
        />
      </div>
      <div className='menu-area'>
        <div></div>
        <ul className='menu-list'>
          {menuList.map((menu)=> (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='menu-search'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text'/>
        </div>
      </div>
    </div>
  )
}

export default navbar
