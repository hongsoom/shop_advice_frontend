import instance from "../../shared/Request";
// 게시글 관련 CRUD

// Actions
const LOAD = 'magazines/LOAD';
const ADD = 'magazines/ADD';
// const MODIFY = 'magazines/MODIFY';
// const DELETE = 'magazines/DELETE';

// 초기 상태값
const initialState = { 
    magazine : [ {
        title : "",
        imageUrl: "",
        shopUrl: "",
        content: "",
        price: "",
        category: "",
        date : new Date().toLocaleString(),
        name : ""
    }],
    // magazine : [ {
    //     title : "이 바지를 사고 싶어요",
    //     imageUrl: "test.png",
    //     shopUrl: "www.naver.com",
    //     content: "마음에 들어요",
    //     price: "50000",
    //     category: "남성복",
    //     date : new Date().toLocaleString(),
    //     name : "test name"
    // }],
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
//local에서 AddmagazineFB구현 확인 
// export const addMagazineFB = (magazine) => {
//     return async function (dispatch) {
//     // const docRef = await addDoc(collection(db, "magazines"), magazine);
//     const magazine_data = {...magazine};
//     // const magazine_data = {id: magazine.id, ...magazine};
//     dispatch(addMagazine(magazine_data));
// }
// }

// axios
export const addMagazineFB = (title, imageUrl, shopUrl, content, price, category ) => {
    console.log(title, imageUrl)
      return async function (dispatch, getState, { history }) {
        const _article = await instance
        .post("/api/article", {
            title : title,
            imageUrld : imageUrl,
        })
        .then((response) => {
          console.log(response)
  
          const token = response.data.token
          localStorage.setItem("token", token)
  
          console.log(token)
  
          history.push("/");
        })
        .catch((error) => {
          console.log(error)
          const err_message = error.response.data.errorMessage;
          window.alert(err_message)
        })
      }
  }



// export const loadMagazineFB = () => {
//     return async function (dispatch) {
//         // const magazine_data = await getDocs(collection(db, "magazines"));
        
//         let magazine_list = [];
//         console.log();
//         // magazine_data.forEach((doc) => {
//         //     magazine_list.push({id:doc.id, ...doc.data()});
//         // });

//         dispatch(loadMagazine(magazine_list));
//     }
//     }

// reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "magazines/LOAD":
            return state;
            // return {magazine : action.magazine_list};

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

