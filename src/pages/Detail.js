import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Comment from "../components/comment";
// import test from "../assets/test.png";
import profile from "../assets/profile.png";
import "../css/Detail.css";

const Detail = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.card.magazine);
    // const name = useSelector((state) => state.user.nickname);

    const articleId = useParams().articleId;
    const index  = useParams().index;

    return (
        <div className="Detail_container">
            <div className="Detail_content">
                <div className="Detail_image">
                    <div className="Detail_user">
                        <img src={profile} alt='profile'/>
                        <p>{data[index].nickname}</p>
                    </div>    
                    <div className="Detail_poto">    
                        <img src={data[index].imageUrl} alt='post_image'/>
                        <p>{data[index].createdAt}</p>
                        {/* 시간 고민 필요  */}
                    </div>
                </div>
                <div className="Detail_infor">
                    <div className="Detail_title">
                        <h1>{data[index].title}</h1>
                        <p>{data[index].category}</p>
                    </div>
                    <p className="price">{data[index].price}</p>
                    <button>{data[index].shopUrl}</button>
                    <p className="content">{data[index].content}</p>
                </div>
            </div>            
            <Comment articleId={articleId}/>
        </div>
    )
}

export default Detail;