import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-component'>
            <div className='product-component'>
                {
                    products.map(product => <Shop key={product.id} product={product}></Shop>)
                }
            </div>

            <div className='cart-container'>
                <h1>Products catagories</h1>
            </div>
        </div>
    );
};

export default Products;