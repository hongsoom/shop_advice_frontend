import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loadCommentFB, addCommentFB, editCommentFB, deleteCommentFB } from "../redux/modules/comment";
import profile from "../assets/profile.png";
import "../css/comment.css";

const Comment = ({articleId}) => {

    const dispatch = useDispatch();

    const [comment, setComment] = React.useState("");

    const data = useSelector((state) => state.comment.comments)

    React.useEffect (() => {
        dispatch(loadCommentFB(articleId));
      }, [data]);

    const addcomment = () => {
        dispatch(addCommentFB(
            articleId, comment))
    }
    
    return (
        <div className="comment_container">
            <div className="comment_add">
                <input type="text" placeholder="댓글을 작성해 주세요" onChange={(e) => setComment(e.target.value)}></input>
                <button onClick={addcomment}>작성하기</button>
            </div>
            {data.map((list, index) => {
                return (
                <div className="comment">
                    <>
                    <div className="comment_profile">
                        <img src={profile} alt='profile'/>
                        <p>{list.nickname}</p>
                    </div>
                    <div className="comment_list">
                        <p>{list.comment}</p>
                    </div>
                    <div className="comment_user">
                        <span className="material-symbols-outlined">edit</span>
                        <span onClick={() => dispatch(deleteCommentFB(list.commentId))} className="material-symbols-outlined">delete</span>
                    </div>
                    </>
            </div>
               )})}
        </div>
    )
}

export default Comment;