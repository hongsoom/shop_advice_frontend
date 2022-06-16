import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadMagazineFB } from "../redux/modules/card";
import unlike from "../assets/h0.png";

const Card = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

React.useEffect(() => {
        dispatch(loadMagazineFB());
    }, []);

const data = useSelector((state) => state.card.magazine);

    return (
        data.map((list, index) => { 
                return(
                <div className='Card_one' key={index}>
                    {/* <div className='Card_one' key={index}>  */}
                    <div className='listtitle'>
                        <p>{list.title}</p>
                    </div>
                    <div className='Card_box'>
                    <img src={list.imageUrl} alt="post_image"
                    onClick={() => history.push("/Detail/" + index + "/" + `${list.articleId}`)}
                    />
                    <div className='nickvar'>
                        <p> 🙂 닉네임 : {list.nickname} </p>
                        <img src = {unlike} alt="unlike"/>
                    </div>
                    </div>
                </div>
                );
    })
    );
};
export default Card;
