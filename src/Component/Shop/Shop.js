import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='product'>
            <div className='product-container'>
                <img src={picture} alt="" />
                <h3>Name : {name}</h3>
                <p>Price :{price}</p>
            </div>
            <button className='btn-class'><p>ADD TO Cart</p></button>
        </div>
    );
};

export default Shop;