import React from "react";
import Comment from "../components/comment";
import test from "../css/test.png";
import profile from "../css/profile.png";
import "../css/Detail.css";

const Detail = () => {
    return (
        <div className="Detail-container">
            <div className="Detail-content-container">
                <div className="Detail-image-container">
                    <div className="Detail-user-contetnt">
                        <img src={profile} alt=''/>
                        <p>sumin</p>
                        <p>2022.06.11 04:42</p>
                    </div>    
                    <div className="Detail-image-contetnt">    
                        <img src={test} alt=''/>
                    </div>
                </div>
                <div className="Detail-contetnt">
                    <div className="Detail-title-contetnt">
                        <h1>YACHT CLUB HAT</h1>
                        <p>카테고리</p>
                    </div>
                    <p>$25.00</p>
                    <button>There's a link here!</button>
                    <p>Set sail with the most exclusive internet yacht club! The clubhouse offices are open from 6 am -9 pm with the exception of Monday - Sunday.  Only club members are allowed to use the pool noodles and motorboating is strongly encouraged. For more detailed information please try back later.</p>
                </div>
            </div> 
            <Comment />
        </div>
    )
}

export default Detail;