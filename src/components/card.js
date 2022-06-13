import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"; 
import axios from "axios";
// import { Link } from 'react-router-dom';
// import test from '../assets/retan.png';

const Card = () => {
    const history = useHistory();
    // 잘가져왔는지 확인
    const data = useSelector((state) => state.card.magazine);
        console.log(data);
    
    const callsomethingAxios = () => {
        axios({
            method : "get",
            url: "http://localhost:5000/data"
        }).then((response) => {
			console.log(response);
        });
    }

    // 확인해보기
    React.useEffect(() => {
        callsomethingAxios();
    })

    return ( 
        <div className="Card_container">
            {/* {data && data.map((list, index) => {
                return(
                    <div>                        
                        <img src={list.image_url} alt="post_image"
                        onClick={() => history.push("/Detail/" + index + "/" + `${list.id}`)}
                        />   
                        <p>{list.title}</p>
                    </div>
                );
            })} */}
        </div>
    );
};
export default Card;
