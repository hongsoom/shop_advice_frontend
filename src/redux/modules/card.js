import instance from "../../shared/Request";
import { apis } from '../../shared/api';


// 게시글 관련 CRUD

// Actions
// const LOAD = 'magazines/LOAD';
const LOAD = 'article/LOAD';
const ADD = 'magazines/ADD';
const MODIFY = 'magazines/MODIFY';
const DELETE = 'magazines/DELETE';

// 초기 상태값
const initialState = { 
    magazine : [ {
        title : "",
        imageUrl: "",
        shopUrl: "",
        content: "",
        price: "",
        category: ""
        // date : new Date().toLocaleString(),
        // name : ""
    }],
};

// Action Creators
export function loadAarticles(articles) {
    return  { type: LOAD, articles };
}
// 
export function addMagazine(magazine) {
    return { type: ADD, magazine };
}
export function modifyMagazine(magazine, magazine_index) {
    return { type: MODIFY, magazine, magazine_index };
}
export function deleteMagazine(magazine_index) {
    return { type: DELETE, magazine_index };
}

// axios
export const loadMagazineFB  = () => {
    return async(dispatch, getState) => {
    await apis.articles()
    .then((res) => {
        // console.log(res.data.articles);
        dispatch(loadAarticles(res.data.articles));        
    }).catch((err) => {console.error(err)})
	};}
    // dispatch(imageCreators.setPreview(null));

export const addMagazineFB = (title, imageUrl, shopUrl, content, price, category) => {
    console.log(title, imageUrl, shopUrl, content, price, category)
    return async function (dispatch, getState ) {
        const _article = await instance
        .post("/api/article", {
            title : title ,
            imageUrl : imageUrl,
            shopUrl : shopUrl,
            content :content,
            price : price,
            category : category,}
        ).then((response) => {
            console.log(response)
            // const magazine_data = {_article};
            // dispatch(addMagazine(_article))
            dispatch(addMagazine(title, imageUrl, shopUrl, content, price, category))
            
            const message = response.data.message;
            window.alert(message);
        })
        .catch((error) => {
            console.log(error)
            const err_message = error.response.data.errorMessage;
            window.alert(err_message)
        })
}
}


// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "article/LOAD":
            // return state;
            return {magazine : action.articles};
                
        case "magazines/ADD": {
            const new_magazine_list = [...state.magazine, action.magazine];
            return { magazine: new_magazine_list };
            // return state;
        }

        // case "magazines/MODIFY": {
        //     const new_magazine_list = state.magazine.map((a, idx) => 
        //         parseInt(action.magazine_index) === idx ? { ...a, ...action.magazine } : a);
        //     return { ...state, magazine: new_magazine_list };
        // }

        // case "magazines/DELETE": {
        //     const new_magazine_list = state.magazine.filter((l, idx) => {
        //     return parseInt(action.magazine_index) !== idx;
        //     });
        //     return {magazine: new_magazine_list};
        // }
default:
return state;
}
}

