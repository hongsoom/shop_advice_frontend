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
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Header;