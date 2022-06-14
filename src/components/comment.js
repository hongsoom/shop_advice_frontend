import React from "react";
import { useDispatch } from "react-redux"; 
import { addCommentFB, editCommentFB, deleteCommentFB } from "../redux/modules/comment";

import profile from "../assets/profile.png";
import "../css/comment.css";

const Comment = ({articleId}) => {
    console.log(articleId)
    const dispatch = useDispatch();

    const [comment, setcomment] = React.useState("");

    const addcomment = () => {
        dispatch(addCommentFB(
            articleId, comment 
        ))
    }
    
    return (
        <div className="comment_container">
            <div className="comment_add">
                <input type="text" placeholder="댓글을 작성해 주세요" onChange={(e) => setcomment(e.target.value)}></input>
                <button onClick={addcomment}>작성하기</button>
            </div>
            <div className="comment">
                <div className="comment_profile">
                    <img src={profile} alt='profile'/>
                    <p>sumin</p>
                </div>
                <div className="comment_list">
                    <p>css 어렵다 .. .. </p>
                </div>
                <div className="comment_user">
                    <span className="material-symbols-outlined">edit</span>
                    <span className="material-symbols-outlined">delete</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;