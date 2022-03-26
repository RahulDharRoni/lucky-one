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