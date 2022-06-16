import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loadCommentFB, addCommentFB, editCommentFB, deleteCommentFB } from "../redux/modules/comment";
import profile from "../assets/profile.png";
import "../css/comment.css";

const Comment = ({articleId}) => {

    const dispatch = useDispatch();

    const [comment, setComment] = React.useState("");
    const [edit, setEdit] = React.useState(false);
    const [editcomment, setEditcomment] = React.useState("");

    const data = useSelector((state) => state.comment.comments);
    const one = useSelector((state) => state.comment.comment);
    const Id = useSelector((state) => state.comment.commentId);
    const edit_comment = useSelector((state) => state.comment.editcomment);

    React.useEffect (() => {
        dispatch(loadCommentFB(articleId));
      }, [one]);

    React.useEffect (() => {
        dispatch(loadCommentFB(articleId));
    }, [Id]);

    React.useEffect (() => {
        dispatch(loadCommentFB(articleId));
    }, [edit_comment]);

    const addcomment = () => {
        dispatch(addCommentFB(
            articleId, comment));
            setComment("")
    }
    
    if(edit === false) {
        return (
            <div className="comment_container">
                <div className="comment_add">
                    <input type="text" placeholder="댓글을 작성해 주세요" value={comment} onChange={(e) => setComment(e.target.value)}></input>
                    <button onClick={addcomment}>작성하기</button>
                </div> 
                {data.map((list, index) => {
                    return (
                    <div className="comment" key={list.index}>
                        <>
                        <div className="comment_profile">
                            <img src={profile} alt='profile'/>
                            <p>{list.nickname}</p>
                        </div>
                        <div className="comment_list">
                            <p>{list.comment}</p>
                        </div>
                        <div className="comment_user" >
                            <span onClick={() => setEdit(true)} className="material-symbols-outlined">edit</span>
                            <span onClick={() => dispatch(deleteCommentFB(list.commentId))} className="material-symbols-outlined">delete</span>
                        </div>
                        </>
                </div>
                )})}
            </div>
            )
        } else {
            return (
                <div className="comment_container">
                    <div className="comment_add">
                        <input type="text" placeholder="댓글을 작성해 주세요" value={comment} onChange={(e) => setComment(e.target.value)}></input>
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
                            <div className="comment_edit">
                                <input type="text" onChange={(e) => setEditcomment(e.target.value)}/>
                                <button onClick={() => {dispatch(editCommentFB(list.commentId, editcomment)); 
                                    setEdit(true);}}
                                    >수정하기</button>
                            </div>
                            </>
                    </div>
                    )})}
                </div>
            )
        }
    }

export default Comment;