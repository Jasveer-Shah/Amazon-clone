import React from 'react'
// import { products } from '../../utils/ProductsData'
import './Product.css';
import { Link } from 'react-router-dom'
import { ShoppingBasketOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/action';


const Product = ({id, title, image, price, rating, spacification, detail}) => {
      const dispatch = useDispatch();
      const addItemToBasket = () => {
          const item = {
              id, 
              title,
               image,
                price,
                 rating, 
                 spacification,
                  detail,
          }
          dispatch(addToBasket(item))
      }
    return (
        <div className='product'>
           <div className='info'>
               <Link to={`/product/${id}`} className='title'>
                   <p>{title}</p>
               </Link>
               <p className='price'>
                   <strong>$</strong>
                   <strong>{price}</strong>
               </p>

               <div className='rating'> 
                   {/* // Array(rating) creates [empty, empty, empty] then fill creates [undefined, undefined, undefined]                */}
                   {Array(rating).fill().map((_, index) => (<p key={index}>⭐</p>))}  
               </div>
               </div>
               <img src={image} alt=''/>
               <button onClick={addItemToBasket}>
                   <i>
                       <ShoppingBasketOutlined/>
                   </i>
                   Add to Basket
               </button>
          

        </div>
    )
}

export default Product
