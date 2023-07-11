import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crwn-logo/crown.svg';
import './navbar.styles.scss';

import {auth} from '../../firebase/firebase.utils';

const NavBar = ({currentUser})=>(
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
        {
            currentUser ?
            (<div className='option' onClick={()=> auth.signOut()}>LOG OUT</div>)
            :
            (<Link className='option' to='/signin'>LOG IN</Link>)
        }
       </div>
    </div>
)

export default NavBar;