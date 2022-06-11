import React from 'react';
import Logo from '../assets/Logo.jpg';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { useSelector, useDispatch } from "react-redux";
// 로그인 관련
// import { LogoutFB } from "../redux/modules/user";

const Header = () => {
    const history = useHistory();
    // const dispatch = useDispatch();

    // const name = useSelector((state) => state.user.name);

    // const is_login = useSelector((state) => state.user.is_login);
    return (
        <div className ="Wrapper">
            <div className = "Logo" onClick={() => {history.push("/")}}>
                <img src={Logo} alt=""/>
            </div>
            <div></div>                     
            {/* {is_login ? (
            <div className='Content'>
                <p> `${name}님 환영합니다!`</p>
                <button onClick={ () => dispatch(LogoutFB())}>로그아웃</button>
            </div>
            ) : ( */}
            <div className='Nav'>
                {/* <button onClick={() => {history.push("/Signup")}}>회원가입</button>
                <button onClick={() => {history.push("/Login")}}>로그인</button> */}
            <Stack direction="row" spacing={1}>
            <Button onClick={() => {history.push("/Singup")}}>회원가입</Button>
            <Button onClick={() => {history.push("/Login")}}>로그인</Button>
            </Stack>
            </div>
            {/* )} */}
        </div>
    );
};

export default Header;