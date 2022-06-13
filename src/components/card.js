import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import test from '../assets/retan.png';

const Card = () => {

    return ( 
        <div className="Card_container">
            <Link to="/Detail"> 
                <img src={test} alt="test"/>         
            </Link>
            <p>Title</p>  
        </div>
    );
};
export default Card;
