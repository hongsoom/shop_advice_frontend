// 게시글 관련 CRUD

// Actions
const LOAD = 'magazines/LOAD';
const ADD = 'magazines/ADD';
// const MODIFY = 'magazines/MODIFY';
// const DELETE = 'magazines/DELETE';

// 초기 상태값
const initialState = {
magazine : [
],
};

// Action Creators
export function loadMagazine(magazine_list) {
    return { type: LOAD, magazine_list };
}
// 
export function addMagazine(magazine) {
    return { type: ADD, magazine };
}

// export function modifyMagazine(magazine, magazine_index) {
//     return { type: MODIFY, magazine, magazine_index };
// }


// export function deleteMagazine(magazine_index) {
//     return { type: DELETE, magazine_index };
// }

// middlewares

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "magazines/LOAD":
            return {magazine : action.magazine_list};

        case "magazines/ADD": {
            const new_magazine_list = [...state.magazine, action.magazine];
            return { magazine: new_magazine_list };
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

