import React from 'react';
import "../css/Add.css";
// import TestImage from "../assets/test.png";
import { useHistory } from 'react-router-dom';
import { useRef, useState }from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import { addMagazine, loadMagazine } from "../redux/modules/card";

const Add = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // 미리보기
    const [preview, setPreview ] = useState("");
    const [imageName, setimageName ] = useState("");
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [shopUrl, setShopUrl] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    
    const name = useSelector((state) => state.user.name);
    console.log(name);
    // 잘가져왔는지 확인
    React.useEffect(() => {
        dispatch(loadMagazine());}, []);
    
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
        title,
        content,
        imageUrl : file_link_ref.current?.url,
        date : new Date().toLocaleString(),
        name,
        price,
        category
    }))
    console.log(add);
    history.push('/');
    }

    return (
        <div className="Add">
            <div className="add_title">게시글 작성</div>
            <div className="Title_input">
                    <input type="text" placeholder="제목을 입력해주세요" />
                    {/* 드롭박스 */}
                    <select> 
                        <option value="">카테고리▼</option>
                        <option value="M">남성복</option>
                        <option value="F">여성복</option>
                    </select> 
            </div>
            <div className="Add_input">
                    <input type="file" id="file" 
                    accept="image/jpg, image/jpeg, image/png" onChange={uploadFB} />
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
                    placeholder="내용을 적어주세요"
                    type="text" value={content} 
                    onChange={(e) => { setContent(e.target.value);}}>내용 미리보기</textarea>
                </div>                
            </div>
            <div className="Add_container">
                    {/* 미리보기 밑 박스 */}
                <div className="Link_input">
                    <input type="text" placeholder="구매처 링크를 적어주세요"
                    value={shopUrl}/>
                </div>                
                <div className="Link_input">
                    <input type="text" placeholder="가격을 적어주세요" 
                    value={price}/>
                </div>                
            </div>
            {/* <div className='Write_container'>
                <textarea type="text" placeholder="내용을 적어주세요" ></textarea>
            </div> */}
            <div className="Add_container">
                <div className='Add_write'>
                    <button onClick={add}>작성하기</button>
                </div>
            </div>
        </div>        
    );
};

export default Add;