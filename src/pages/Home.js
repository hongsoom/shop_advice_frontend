import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    return (
        <div>
            <button onClick={ () => history.push('/Detail')}>상세</button>
            <button onClick={ () => history.push('/Login')}>로그인</button>
            <button onClick={ () => history.push('/Singup')}>회원가입</button>
        </div>
    )
}

export default Home;