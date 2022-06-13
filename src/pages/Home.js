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
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={handleChange}
            label="Category" />
                <button onClick={() => history.push('/Add')}>작성하러가기</button>
                <Card />
            </div>     
        </div>
    );
};

export default Home;