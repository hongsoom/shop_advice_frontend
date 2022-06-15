import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { delArticleFB } from "../redux/modules/card";
import Comment from "../components/comment";
// import test from "../assets/test.png";
import profile from "../assets/profile.png";
import "../css/Detail.css";

const Detail = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const data = useSelector((state) => state.card.magazine);
    // const nickname = useSelector((state) => state.user.nickname);
    const nickname = localStorage.getItem("nickname")

    const articleId = useParams().articleId;
    const index  = useParams().index;

    //삭제
    const deletearticle = () => {
        dispatch(delArticleFB(
            articleId
        ))
    }
    // 게시 시간 보여주기
    const iso = data[index].createdAt;
    const date = iso.toString().split("").slice(5, 10).join("")
    // console.log(date);

    return (
        <div className="Detail_container">
            <div className="Detail_content">
                <div className="Detail_image">
                    <div className="Detail_user">
                        <img src={profile} alt='profile'/>
                        <p>{data[index].nickname}</p>
                    </div>
                    {nickname === data[index].nickname ? (
                            <div className='nickbtn'>
                            <button onClick={() => history.push("/Edit/" + index + "/" + `${data[index].articleId}`)}>수정</button>
                            <button onClick={deletearticle}>삭제</button>
                            </div>
                        ) : null }
                    <div className="Detail_poto">    
                        <img src={data[index].imageUrl} alt='post_image'/>
                    </div>
                </div>
                <div className="Detail_infor">
                    <div className="Detail_title">
                        <h1>{data[index].title}</h1>
                        <p>{data[index].category}</p>
                    </div>
                    <p className="price">{data[index].price}</p>
                    <button>{data[index].shopUrl}</button>
                    <p className="date">게시글 작성: {date}</p>
                    <p className="content">{data[index].content}</p>
                </div>
            </div>            
            <Comment articleId={articleId}/>
        </div>
    )
}

export default Detail;