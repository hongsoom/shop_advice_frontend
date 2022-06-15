import React from 'react';
import "../css/card.css";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loadMagazineFB, delArticleFB } from "../redux/modules/card";

const Card = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

React.useEffect(() => {
        dispatch(loadMagazineFB());
    }, []);

const data = useSelector((state) => state.card.magazine);
const name = useSelector((state) => state.user.nickname);

const articleId = useParams().articleId;

const delete_article = () => {
        dispatch(delArticleFB(
            articleId
        ))
        history.push('/');
}
console.log(name);
    return ( 
        <div className="Card_container">
            {data && data.map((list, index) => {
                return(
                <div className='Card_box' key={index}>
                    <div className='Card_one'>                    
                    <div className='nickvar'>
                            <p> 🙂 닉네임 : {list.nickname} </p>
                            {/* <p> {list.createdAt} </p> //시간 고민 필요 */}
                        {name === list.nickname ? (
                            <div className='nickbtn'>
                            <button onClick={() => history.push("/Edit/" + index + "/" + `${list.articleId}`)}>수정</button>
                            <button onClick={delete_article}>삭제</button>
                            </div>
                        ) : null }
                        </div>
                    <img src={list.imageUrl} alt="post_image"
                    onClick={() => history.push("/Detail/" + index + "/" + `${list.articleId}`)}
                    />
                    <p>{list.title}</p>
                    </div>
                </div>
                );
            })}
        </div>
    );
};
export default Card;
