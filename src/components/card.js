import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadMagazineFB } from "../redux/modules/card";

const Card = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
        
React.useEffect(() => {
        dispatch(loadMagazineFB());
    }, []);

const data = useSelector((state) => state.card.magazine);

    return ( 
        <div className="Card_container">
            {data && data.map((list, index) => {
                return(
                    <div className='Card_one' key={index}>                        
                        <img src={list.imageUrl} alt="post_image"
                        onClick={() => history.push("/Detail/" + index + "/" + `${list.id}`)}
                        />
                        <p>{list.title}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Card;
