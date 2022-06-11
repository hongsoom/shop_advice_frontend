import React from 'react';
import '../css/Home.css';
import test from '../assets/retan.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = () => {
    return ( 
        <div className="card" >
            <img src={test} alt=""/>
            <div className="icon">
            <FavoriteBorderIcon/>
            </div>      
            <p>Title</p>        
        </div>
);
};
export default Card;
