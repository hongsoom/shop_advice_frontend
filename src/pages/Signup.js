import React from "react";
import { useDispatch } from "react-redux"; 
import { SignupFB, idCheckFB, nicknameCheckFB } from "../redux/modules/user";
import "../css/Singup.css";
import SingupImage from "../assets/main.png";

const Signup = () => {

    const dispatch = useDispatch();

    const [userId, setuserId] = React.useState("");
    const [nickname, setnickname] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [passwordCheck, setpasswordCheck] = React.useState("");

    const signup = () => {
        dispatch(SignupFB(
            userId, nickname, password, passwordCheck
        ))
    }

    const idCheck = () => {
        dispatch(idCheckFB(
            userId
        ))
    }

    const nicknameCheck = () => {
        dispatch(nicknameCheckFB(
            nickname
        ))
    }

    return (
        <div className="Singup_container">
            <div className="Singup_content">
                <div className="Singup_image">
                    <img src={SingupImage} alt="main"/>
                </div>
                <div className="Singup_input">
                    <p className="title">회원가입</p>
                    
                    <label>아이디</label>
                    <div className="Singup_id">
                        <input type="text" label="아이디" placeholder="아이디를 입력해주세요"  onChange={(e) => setuserId(e.target.value)}/>
                        <button onClick={idCheck}>중복확인</button>
                    </div>

                    <label>닉네임</label>
                    <div className="Singup_nickname">
                        <input type="text" label="닉네임" placeholder="닉네임을 입력해주세요" onChange={(e) => setnickname(e.target.value)}/>
                        <button onClick={nicknameCheck}>중복확인</button>
                    </div>

                    <label>비밀번호</label>
                    <input type="Password" label="비밀번호" placeholder="최소8자이상(대문자,숫자,특수문자 각 1개씩 포함)" onChange={(e) => setpassword(e.target.value)}/>

                    <label>비밀번호 확인</label>
                    <input type="Password" label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요." onChange={(e) => setpasswordCheck(e.target.value)} />

                    <button onClick={signup} className="Singup_btn" disabled={userId === "" || nickname === "" || password === "" || passwordCheck === "" ? true : false}>회원가입</button>

                    <p>계정이 있으신가요? &nbsp;
                        <a href={"/Login"}>로그인</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;