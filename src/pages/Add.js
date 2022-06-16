import React from 'react';
import "../css/Add.css";
import { useHistory } from 'react-router-dom';
import { useState }from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { addMagazineFB } from "../redux/modules/card";
// import instance from "../shared/Request";
import { uploadimageFB } from "../redux/modules/image";

const Add = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [content, setContent] = useState("");
    const [shopUrl, setShopUrl] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");    
    const [category, setCategory] = useState("");
    // 미리보기
    const [preview, setPreview] = useState("");
    
    // const fileInput = React.useRef(null);
    const imageUrl = useSelector((state) => state.image.imageUrl);
    //서버 확인 중
    const uploadFB = async(e) => {
        // const reader = new FileReader();
        const upfile = e.target.files[0];
        // setimageName(upfile.name); 
        
        const formData = new FormData();
        formData.append("image", upfile);
        await dispatch(uploadimageFB(formData));
        
        // reader.readAsDataURL(upfile);
        // reader.onload = function(e) {
        //     setPreview(e.target.result);}
    }
    // 추가하기 액션
    const add = () => {
        dispatch(addMagazineFB(
        title,
        imageUrl,
        shopUrl,
        content,
        price,
        category
    ))
    history.push('/');
    }
    return (
        <div className="Add">
            <div className="add_title" >게시글 작성</div>
            <div className="Title_input">
                    <input type="text" placeholder="제목을 입력해주세요" 
                    onChange={(e) => { setTitle(e.target.value);}}/>
                    {/* 드롭박스 */}
                    <select value={category}
                    onChange={(e) => { setCategory(e.target.value);}}> 
                        <option value="">카테고리▼</option>
                        <option value="남성복">남성복</option>
                        <option value="여성복">여성복</option>
                    </select> 
            </div>
            <div className="Add_input">
                    <input type="file" id="file" 
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={uploadFB} />                    
                    {/* <input type="submit" id="submit" value="이미지첨부"></input>  */}
                    {/* <button onClick={onClickuploadFB} >이미지첨부</button>                   */}
            </div>
            {/* 미리보기 */}
            <div className="Add_container">
                    {/* 이미지 첨부 */}
                <div className="Pre_input">
                    <img src={imageUrl} alt=''/>
                </div>                
                <div className="Pre_input">
                    <textarea 
                    placeholder="내용 미리보기"
                    type="text" value={content} 
                    readOnly
                    >내용 미리보기</textarea>
                </div>                
            </div>
            <div className="Add_container">
                    {/* 미리보기 밑 박스 */}
                <div className="Link_input">
                    <input type="text" placeholder="구매처 링크를 적어주세요"
                    onChange={(e) => {setShopUrl(e.target.value);}}/>
                </div>                
                <div className="Link_input">
                    <input type="text" placeholder="가격을 적어주세요" 
                    onChange={(e) => {setPrice(e.target.value);}}/>
                </div>                
            </div>
            <div className='Write_container'>
                <textarea type="text" defaltvalue={content}
                placeholder="내용을 적어주세요" 
                onChange={(e) => {setContent(e.target.value);}}
                ></textarea>
            </div>
            <div className="Add_container">
                <div className='Add_write'>
                    <button type="button"
                    onClick={add}>
                    {/* // disabled={content === "" || title === "" || imageUrl === "" ? true : false }> */}
                    작성하기</button>
                </div>
            </div>
        </div>        
    );
};

export default Add;