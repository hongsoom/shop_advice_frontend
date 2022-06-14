import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadMagazine } from "../redux/modules/card";
// import { Link } from 'react-router-dom';
// import test from '../assets/retan.png';

const Card = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    // 잘가져왔는지 확인
    const data = useSelector((state) => state.card.magazine);
    // console.log(data);

    React.useEffect(() => {
        dispatch(loadMagazine()) ;
    }, []);

    return ( 
        <div className="Card_container">
            {data && data.map((list, index) => {
                return(
                    <div className='Card_one' key={list.id}>                        
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
