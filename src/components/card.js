import React from 'react';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';
import test from '../assets/retan.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Card = () => {
    const history = useHistory();
    return ( 
        <div className="card" >
        <div onClick={() => {history.push("/Detail/:index/:id")}}>
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
