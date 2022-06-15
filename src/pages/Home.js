import React from 'react';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';
import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";


const Home = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);   
    
    // 드롭다운 관련
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (        
        <div className="Home-container">
            <div className="Home-content">
                {is_login ? (
                    <button onClick={() => history.push('/Add')}>작성하러가기</button>
                ) : null }
                <div className='select'>
                    {/* 드롭박스 */}
                    <select value={category}
                    onChange={handleChange}> 
                        <option value="">카테고리▼</option>
                        <option value="남성복">남성복</option>
                        <option value="여성복">여성복</option>
                    </select>
                </div>
                <Card />
            </div>     
        </div>
    );
};

export default Home;