import React from 'react';
import "../css/Add.css";
// import TestImage from "../assets/test.png";
import { useHistory } from 'react-router-dom';
import { useRef, useState }from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { addMagazine } from "../redux/modules/card";

const Add = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // 미리보기
    const [preview, setPreview ] = useState("");
    const [imageName, setimageName ] = useState("");
    const [content, setContent] = useState("");
    const [shopUrl, setShopUrl] = useState("");
    const titleInput = React.useRef(null);
    // const shopUrl = React.useRef(null);
    const price = React.useRef(null);
    const [category, setCategory] = useState("");
    
    const name = useSelector((state) => state.user.name);
    
    const file_link_ref = useRef(null);

    // 이미지 업로드
    const uploadFB = async (e) => {

        // const uploded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
        // e.target.files[0]
        // );

        const reader = new FileReader();
        const file =  e.target.files[0];
        
        setimageName(file.name);
        // 콘솔로 확인해보기
        // console.log(reader, file);
        reader.readAsDataURL(file);
        reader.onload = function(e) { 
            setPreview(e.target.result);
        }
        console.log(file_link_ref.current);
        // const file_url = await getDownloadURL(uploded_file.ref);

        // file_link_ref.current = { url : file_url };
    }
    const onClickuploadFB = async () => {
        // 테스트를 위해 임의값 넣어줌
        file_link_ref.current = "https://www.automatetheplanet.com/wp-content/uploads/2015/06/Test-URL-Redirects-WebDriver.jpg";
        console.log(file_link_ref.current);
    }
    // 추가하기 액션
    const add = () => {
        dispatch(addMagazine({
        title: titleInput.current.value,
        content,
        imageUrl : file_link_ref.current.url,
        shopUrl,
        date : new Date().toLocaleString(),
        name,
        price : price.current.value,
        category
    }))
    console.log(add);
    history.push('/');
    }

    return (
        <div className="Add">
            <div className="add_title" >게시글 작성</div>
            <div className="Title_input">
                    <input type="text" placeholder="제목을 입력해주세요" 
                    ref={titleInput}/>
                    {/* 드롭박스 */}
                    <select value={category}
                    onChange={(e) => { setCategory(e.target.value);}}> 
                        <option value="">카테고리▼</option>
                        <option value="M">남성복</option>
                        <option value="F">여성복</option>
                    </select> 
            </div>
            <div className="Add_input">
                    <input type="file" id="file" 
                    accept="image/jpg, image/jpeg, image/png" 
                    defaltvalue="imageName" onChange={uploadFB} />
                    {/* <input type="text" 
                    label="이미지" placeholder="이미지를 첨부해주세요" />
                    <input type="file" id="file" 
                    accept="image/jpg, image/jpeg, image/png"
                    style={{display: 'none'}}
                    onChange={uploadFB}></input> */}
                    {/* <input type="submit" id="submit" value="이미지첨부"></input>  */}
                    <button onClick={onClickuploadFB}>이미지첨부</button>                  
            </div>
            {/* 미리보기 */}
            <div className="Add_container">
                    {/* 이미지 첨부 */}
                <div className="Pre_input">
                    <img src={preview} alt=''/>
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
                    onChange={(e) => { setShopUrl(e.target.value);}}/>
                </div>                
                <div className="Link_input">
                    <input type="text" placeholder="가격을 적어주세요" 
                    ref={price}/>
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
                    <button onClick={add}>작성하기</button>
                </div>
            </div>
        </div>        
    );
};

export default Add;