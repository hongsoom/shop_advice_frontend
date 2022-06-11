import React from 'react';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import { auth } from "../shared/firebase";
import Card from "../components/card";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// 드롭다운
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {
    const history = useHistory();

    // const is_login = useSelector((state) => state.user.is_login);

    // 드롭다운
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (        
        <div className='Home'>     
        {/* {is_login ? ( */}
        <div className='gowrite'>
            <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={() => history.push("/Add")}>게시글 작성하러 가기</Button>
            </Stack>
        </div>
        {/* ) : null} */}
        <div className='dropdown'>   
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            All
            </InputLabel>
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            label="Category" >
            <MenuItem value="">
                <em>All</em>
            </MenuItem>
            <MenuItem value={1}>남성복</MenuItem>
            <MenuItem value={2}>여성복</MenuItem>
            </Select>
            </FormControl>
        </div> 
        <div className="container">   
        <Card />
        {/* 값 들어오면 그 들어온 갯수만큼 찍히게끔 함수 써야함 */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </div>        
    );
};

export default Home;