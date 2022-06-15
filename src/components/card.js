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
                <div className='Card_box' key={index}>
                    <div className='Card_one'>                    
                    <div className='nickvar'>
                            <p> 🙂 닉네임 : {list.nickname} </p>
                        </div>
                    <img src={list.imageUrl} alt="post_image"
                    onClick={() => history.push("/Detail/" + index + "/" + `${list.articleId}`)}
                    />
                    <p>{list.title}</p>
                    </div>
                </div>
                );
            })}
        </div>
    );
};
export default Card;
