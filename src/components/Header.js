import React from 'react';
import Logo from '../assets/Logo.jpg';
import '../css/Header.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LogoutFB } from "../redux/modules/user";
import { getCookie } from "../shared/Cookie";

const Header = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const is_login = useSelector((state) => state.user.is_login);
    console.log(is_login)

    const cookie = getCookie("is_login");
    const token = localStorage.getItem("token")
    const nickname = localStorage.getItem("nickname")

    const Logout = () => {
        dispatch(LogoutFB())
    }

    if(cookie === "success" && token) {
    return (
        <div className="Header-container">
            <div className="Header-content">
                <Link to="/"> 
                    <img src={Logo} alt="Logo" />
                </Link>
                {is_login ? (
                <>
                    <p>{nickname}님 환영합니다!</p>
                    <button className="Logout_btn2" onClick={Logout}>로그아웃</button>
                </>        
                    ) : (
                <>
                    <button className="Login_btn2" onClick={ () => history.push('/Login')}>로그인</button>
                    <button className="Singup_btn2" onClick={ () => history.push('/Signup')}>회원가입</button>
                </>
               ) }
            </div>
        </div>
        );
    }
};

export default Header;