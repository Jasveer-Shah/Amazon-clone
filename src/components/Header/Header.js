import React from 'react'
import './Header.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {useSelector, useDispatch} from 'react-redux';
import { logOutInitiate } from '../../redux/action';

const Header = () => {
     const {user, basket} = useSelector((state) => state.data);
     const dispatch = useDispatch();
     const handleAuth = () => {
       if(user){
                dispatch(logOutInitiate());
              }
     }

    return (
      <nav className='header'>
         <Link to='/'>
             <img className='header-logo' src='Amazon_Logo.png' alt='logo'/>
          </Link>

          <div className='header-option' style={{marginRight: '-10px'}}>
               <LocationOnOutlinedIcon/>
          </div>

          <div className='header-option'>
               <span className='header-option1'>Hello</span>
               <span className='header-option2'>Select Your address</span>
          </div>

          <div className='search'>
                <select>
                    <option>All</option>
                </select>
                <input type='text' className='searchInput'/>
                <SearchOutlinedIcon className='searchIcon'/>
          </div>

          <div className='header-nav'>
             <Link to={`${user} ? '/' : "/login"`} className='header-Link'> 
               <div onClick={handleAuth} className='header-option'>
                   <span className='header-option1'>Hello, {user ? user.email: "Guest"}{" "}</span>
                   <span className='header- option2'>{user ? "Sign Out" : "Sign In"}</span>
               </div>
             </Link>  
             <Link to='/orders' className='header-Link'> 
               <div className='header-option'>
                   <span className='header-option1'>Returns</span>
                   <span className='header- option2'>& Orders</span>
               </div>
             </Link>  
             <Link to='/login' className='header-Link'> 
               <div className='header-option'>
                   <span className='header-option1'>Your</span>
                   <span className='header- option2'>Prime</span>
               </div>
             </Link>
             <Link to='/checkout' className='header-Link'> 
               <div className='header-basket'>
                    <ShoppingCartOutlinedIcon/>
                    <span className='header-option2 basket-count'>{basket && basket.length}</span>
               </div>
             </Link>  
          </div>
      </nav>
    )
}

export default Header

