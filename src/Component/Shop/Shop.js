import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'

const Shop = ({ product, addToCardInfo }) => {
    // const  = props
    const { name, picture, price } = product;
    return (
        <div className='product'>
            <div className='product-container'>
                <img src={picture} alt="" />
                <h3>Name : {name}</h3>
                <p>Price :{price}</p>
            </div>
            <button onClick={() => addToCardInfo(product)} className='btn-class'>
                <p>ADD TO CART</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Shop;