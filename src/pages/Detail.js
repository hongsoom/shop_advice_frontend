import React from "react";
import Comment from "../components/comment";
import test from "../assets/test.png";
import profile from "../assets/profile.png";
import "../css/Detail.css";

const Detail = () => {
    return (
        <div className="Detail_container">
            <div className="Detail_content">
                <div className="Detail_image">
                    <div className="Detail_user">
                        <img src={profile} alt='profile'/>
                        <p>sumin</p>
                    </div>    
                    <div className="Detail_poto">    
                        <img src={test} alt='test'/>
                        <p>2022.06.11 04:42</p>
                    </div>
                </div>
                <div className="Detail_infor">
                    <div className="Detail_title">
                        <h1>YACHT CLUB HAT</h1>
                        <p>카테고리</p>
                    </div>
                    <p className="price">$25.00</p>
                    <button>There's a link here!</button>
                    <p className="content">Set sail with the most exclusive internet yacht club! The clubhouse offices are open from 6 am -9 pm with the exception of Monday - Sunday.  Only club members are allowed to use the pool noodles and motorboating is strongly encouraged. For more detailed information please try back later.</p>
                </div>
            </div> 
            <Comment />
        </div>
    )
}

export default Detail;