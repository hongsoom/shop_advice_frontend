
import React from "react";
import "../css/Login.css";
import LoginImage from "../css/main.png";

const Login = () => {
    return (
        <div className="Login-container">
            <div className="Login-content-container">
                <div className="Login-image-content">
                    <img src={LoginImage} alt="main"/>
                </div>
                <div className="Login-input-content">
                    <p className="title">로그인</p>

                    <label>아이디</label>
                    <input label="아이디" placeholder="아이디를 입력해주세요" />

                    <label>비밀번호</label>
                    <input label="비밀번호" placeholder="비밀번호를 입력해주세요." />

                    <button className="Login-btn">로그인</button>

                    <p>계정이 없으신가요? &nbsp;
                        <a href={"/Singup"}>회원가입</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;