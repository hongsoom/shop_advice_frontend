import React from 'react';
import "../css/Add.css";
// 드롭다운
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import profile from "../css/profile.png";

const Add = () => {
        // 드롭다운
        const [category, setCategory] = React.useState('');

        const handleChange = (event) => {
            setCategory(event.target.value);
        };
    return (
        <div>
            <div className='titlebar'>
            <h2>게시글 작성</h2>
            </div>
            <div className='titlebar'>
                <div className="Add-container">
                    <input></input>
                </div>
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
            </div>
            <div className="Add-image-container">
                이미지를 첨부해주세요
                <input></input>
                <button>이미지 첨부</button>
            </div>
            <div className="Add-image-pr">
                    <img src={profile} alt=''/>
                    이미지 미리보기
            </div>
            <div className="Add-text-pr">    
                    텍스트 미리보기       
            </div>
            <div className="Add-link">
            구매처 링크를 적어주세요
                <input></input>
            </div>
            <div className="Add-link">
            $25.00 가격을 적어주세요
                <input></input>
            </div>
            <div className="Add-title-contetnt">
            내용을 적어주세요                
                <input></input>
            </div>
            <div>
            <button>작성하기!</button>
            </div>
        </div>
    );
};

export default Add;