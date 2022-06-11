import React from "react";
import profile from "../css/profile.png";
import "../css/comment.css";

const comment = () => {
    return (
        <div className="comment-container">
            <div className="comment-add-container">
                <input placeholder="댓글을 작성해 주세요"></input>
                <button>작성하기</button>
            </div>
            <div className="comment-list-container">
                <div className="comment-list-content">
                    <div className="comment-user-content">
                        <img src={profile}/>
                        <p>sumin</p>
                    </div>
                    <div className="comment-btn-content">    
                        <span class="material-symbols-outlined">edit</span>
                        <span class="material-symbols-outlined">delete</span>
                    </div>
                </div>
                <div className="comment-content">        
                    <p>css 어렵다 .. .. </p>
                </div>
            </div>
        </div>
    )
}

export default comment;