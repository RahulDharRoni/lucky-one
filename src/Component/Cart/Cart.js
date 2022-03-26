import React, { useState } from 'react';
import Info from '../Info/Info';
import Random from '../Random/Random';
// import Products from '../Products/Products';
import './Cart.css'

const Cart = ({ cart, random, addRandom }) => {
    // console.log(props)
    // const single = props.

    // const [random, setRandom] = useState([]);
    // const addRandom = () => {
    //     const newCart = cart;
    //     const randomItem = newCart[Math.floor(Math.random() * newCart.length)]
    //     const newRandomItems = [randomItem];
    //     setRandom(newRandomItems)
    // }
    // const random = () => {

    //     let len = Math.ceil(Math.random() * single.length);
    //     if (single[len] === undefined) {
    //         len = Math.ceil(Math.random() * single.length);
    //         console.log(single[0]);
    //         const alert = single[0];
    //         alert(alert.name + ' ' + "its you selected");
    //     }
    //     else {
    //         const alertnews = single[len];
    //         alert(alertnews.name + ' ' + "its you selected");
    //         console.log(alertnews);
    //     }

    // }

    return (
        <div>
            <h1>Products catagories</h1>
            <div className='cart-info-style'>
                {
                    cart.map(cart => <Info key={cart.id} cart={cart}></Info>)
                }

                {/* <button onClick={() => random()}>CHOOSE 1 FOR ME</button> */}
                <button onClick={addRandom}>CHOOSE 1 FOR ME</button>

                <button>CHOOSE AGAIN</button>
            </div>
            <div>
                <Random randoms={random}></Random>
            </div>
        </div>
    );
};

export default Cart;