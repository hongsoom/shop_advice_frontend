import React from 'react';
import "../css/card.css";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"; 
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import test from '../assets/retan.png';

const Card = () => {
    const history = useHistory();
    // 잘가져왔는지 확인
    const data = useSelector((state) => state.card.magazine);
    // get요청 확인
    // const callAxios = () => {
    //     axios(
    //         {
    //             method: "get",
    //             url: "http://3.34.42.87:3000/api/article"
    //         }).then (
    //             (response) => {
    //                 console.log(response);
    //             });                
    // };
    // React.useEffect(() => {
    //     callAxios();
    // })
    
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
