import React from "react";
import profile from "../assets/profile.png";
import "../css/comment.css";

const comment = () => {
    return (
        <div className="comment_container">
            <div className="comment_add">
                <input placeholder="댓글을 작성해 주세요"></input>
                <button>작성하기</button>
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

export default comment;