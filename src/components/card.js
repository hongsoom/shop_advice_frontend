import React from 'react';
import '../css/Home.css';
import test from '../assets/retan.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = () => {
    return ( 
        <div className="card" >
        <div>
            <img src={test} alt=""/>                   
        </div>
        <div className="icon">
            <p>Title</p>  
            <FavoriteBorderIcon/>
        </div> 
        </div>
);
};
export default Card;
