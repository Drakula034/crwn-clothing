import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crwn-logo/crown.svg';
import './navbar.styles.scss';

const NavBar = ()=>(
    <div className="navbar">
       <Link to="/" className='logo-container'>
          <Logo className='logo'/>
       </Link>

       <div className="options">
        <Link className='option' to='/shop'>
            SHOP
        </Link>

        <Link className='option' to='/shop'>
            CONTACT
        </Link>
       </div>
    </div>
)

export default NavBar;