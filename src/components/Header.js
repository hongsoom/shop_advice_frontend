import React from 'react';
import Logo from '../assets/Logo.jpg';
import '../css/Header.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    return (
        <div className="Header-container">
            <div className="Header-content">
                <Link to="/"> 
                    <img src={Logo} alt="Logo" />
                </Link>
                <button className="Login_btn2" onClick={ () => history.push('/Login')}>로그인</button>
                <button className="Singup_btn2" onClick={ () => history.push('/Singup')}>회원가입</button>
            </div>
        </div>
    );
};

export default Header;