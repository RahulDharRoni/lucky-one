import React, { useState } from 'react';
import Info from '../Info/Info';
import Random from '../Random/Random';
// import Products from '../Products/Products';
import './Cart.css'

const Cart = ({ cart, random, emptyAllProducts, addRandom }) => {
    return (

        <div>
            <div className='cart-info-style'>
                <h1>Add To Card</h1>
                {
                    cart.map(cart => <Info key={cart.id} cart={cart}></Info>)
                }

                <button onClick={addRandom}>CHOOSE 1 FOR ME</button>
                <button onClick={emptyAllProducts}>CHOOSE AGAIN</button>
            </div>
            <div>
                <Random randoms={random}></Random>
            </div>
        </div>
    );
};

export default Cart;