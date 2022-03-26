import React from 'react';
import Info from '../Info/Info';
import Products from '../Products/Products';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Products catagories</h1>
            <div className='cart-info-style'>
                {
                    cart.map(cart => <Info key={cart.id} cart={cart}></Info>)
                }
                <button>CHOOSE 1 FOR ME</button>
                <button>CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Cart;