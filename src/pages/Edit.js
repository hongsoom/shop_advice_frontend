import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "../css/Edit.css";
import TestImage from "../assets/test.png";

const Edit = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const articleId = useParams().articleId;
    const index  = useParams().index;



    return (
        <div className="Edit">
            <div className="add_title">게시글 수정</div>
            <div className="Title_input">
                    <input type="text" placeholder="제목을 입력해주세요" />
                    {/* 드롭박스 */}
                    <select> 
                        <option selected>카테고리▼</option>
                        <option>남성복</option>
                        <option>여성복</option>
                    </select> 
            </div>
            <div className="Add_input">
                    <input label="이미지" placeholder="이미지를 첨부해주세요" />
                    <button>이미지 첨부</button>                  
            </div>
            {/* 미리보기 */}
            <div className="Add_container">
                    {/* 이미지 첨부 */}
                <div className="Pre_input">
                    <img src={TestImage} alt=''/>
                </div>                
                <div className="Pre_input">
                    <box>내용 미리보기</box>
                </div>                
            </div>
            <div className="Add_container">
                    {/* 미리보기 밑 박스 */}
                <div className="Link_input">
                    <input type="text" placeholder="구매처 링크를 적어주세요" />
                </div>                
                <div className="Link_input">
                    <input type="text" placeholder="가격을 적어주세요" />
                </div>                
            </div>
            <div className='Write_container'>
                <textarea type="text" placeholder="내용을 적어주세요" ></textarea>
            </div>
            <div className="Add_container">
                <div className='Add_write'>
                    <button>작성하기</button>
                </div>
            </div>
        </div>        
    );
};

export default Edit;