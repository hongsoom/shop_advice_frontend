import React from 'react';
import Logo from '../assets/Logo.jpg';
import '../css/Header.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LogoutFB } from "../redux/modules/user";

const Header = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const nickname = localStorage.getItem("nickname");
    const is_session = localStorage.getItem("token") ? true : false
    const is_login = useSelector((state) => state.user.is_login);

    const Logout = () => {
        dispatch(LogoutFB())
    }

    if (is_login || is_session) {
    return (
        <div className="Header-container">
            <div className="Header-content">
                <Link to="/"> 
                    <img src={Logo} alt="Logo" />
                </Link>
                    <p className="nickname_btn2">{nickname}님 환영합니다!</p>
                    <button className="Logout_btn2" onClick={Logout}>로그아웃</button>
            </div>
        </div>
        )
    } else {
        return (
            <div className="Header-container">
                <div className="Header-content">
                    <Link to="/"> 
                        <img src={Logo} alt="Logo" />
                    </Link>
                        <button className="Login_btn2" onClick={ () => history.push('/Login')}>로그인</button>
                        <button className="Singup_btn2" onClick={ () => history.push('/Signup')}>회원가입</button>
                </div>
            </div>
        )    
    }
}

export default Header;