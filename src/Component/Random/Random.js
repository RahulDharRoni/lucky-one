import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Random.css'

const Random = ({ randoms }) => {
    return (
        <div className='randoms-style'>
            <img src={randoms.picture} alt="" />
            <p>{randoms.name}</p>
        </div>
    );
};

export default Random;