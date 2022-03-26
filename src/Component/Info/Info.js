import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

const Info = ({ cart }) => {
    return (
        <div className='info-style'>
            <img src={cart.picture} alt="" />
            <p>{cart.name}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
    );
};

export default Info;