import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCartInfo] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCardInfo = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCartInfo(newCart);
    }

    // const [random, setRandom] = useState([]);
    // const addRandom = () => {
    //     const newCart = cart;
    //     const randomItem = newCart[Math.floor(Math.random() * newCart.length)]
    //     const newRandomItems = [randomItem];
    //     setRandom(newRandomItems)
    // }

    return (
        <div className='shop-component'>
            <div className='product-component'>
                {
                    products.map(product => <Shop key={product.id} product={product} addToCardInfo={addToCardInfo}></Shop>)
                }
            </div>

            <div className='cart-container'>

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Products;