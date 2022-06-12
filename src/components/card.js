import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import test from '../assets/retan.png';

const Card = () => {
    const history = useHistory();

    return ( 
        <div className="Card-container">
            <div onClick={() => {history.push("/Detail/:index/:id")}}>
                <img src={test} alt=""/>                   
            </div>
            <div className="icon">
                <p>Title</p>  
            </div> 
        </div>
    );
};
export default Card;
