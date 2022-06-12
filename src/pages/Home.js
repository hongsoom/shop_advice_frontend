import React from 'react';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';
import Card from "../components/card";
// import { useSelector } from "react-redux";
// import { auth } from "../shared/firebase";

const Home = () => {
    const history = useHistory();

    // const is_login = useSelector((state) => state.user.is_login);

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (        
        <div className="Home-container">
            <div className="Home-content">
                <button onClick={() => history.push("/Singup")}>회원가입</button>
                <button onClick={() => history.push("/Login")}>로그인</button>
                <button onClick={() => history.push("/Detail")}>상세페이지</button>
            </div>     
        </div>
    );
};

export default Home;