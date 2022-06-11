<<<<<<< HEAD
import React from "react";
import "../css/Singup.css";
import SingupImage from "../css/main.png";

const Singup = () => {
    return (
        <div className="Singup-container">
            <div className="Singup-content">
                <div className="Singup-image-content">
                    <img src={SingupImage} alt="main"/>
                </div>
                <div className="Singup-input-content">
                    <p className="title">회원가입</p>

                    <label>아이디</label>
                    <div className="Singup-id-content">
                        <input label="아이디" placeholder="아이디를 입력해주세요" />
                        <button>중복확인</button>
                    </div>

                    <label>닉네임</label>
                    <div className="Singup-nickname-content">
                        <input label="닉네임" placeholder="닉네임을 입력해주세요" />
                        <button>중복확인</button>
                    </div>

                    <label>비밀번호</label>
                    <input label="비밀번호" placeholder="최소8자이상(대문자,숫자,특수문자 각 1개씩 포함)" />

                    <label>비밀번호 확인</label>
                    <input label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요." />

                    <button className="Singup-btn-content">회원가입</button>

                    <p>계정이 있으신가요? &nbsp;
                     <a href={"/Login"}>로그인</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
=======
import React from 'react';

const Singup = () => {
    return (
        <div>
            회원가입
        </div>
    );
};
>>>>>>> 32442c2c289a201954b3896abc61ab4f7b9e9872

export default Singup;