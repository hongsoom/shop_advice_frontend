import axios from "axios";

const SET_COMMENT = 'comment/SET_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const EDIT_COMMENT  = 'comment/EDIT_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

const initialState = {
    list : [{
    }] 
};

export const setComment = (user) => {
    return { type: SET_COMMENT, user };
};

export const addComment = (user) => {
    return { type: ADD_COMMENT, user };
};

export const editComment = (user) => {
    return { type: EDIT_COMMENT, user };
};

export const deleteComment  = (user) => {
    return { type: DELETE_COMMENT, user };
};

// middlewares
export const loadCommentFB = () => {
    return async function (dispatch) {
  

    }
  }
  
  export const addCommentFB = (magazine) => {
    return async function (dispatch) {

  

    }
  }
  
  export const editCommentFB = (magazine, magazine_id) => {
    return async function(dispatch,getState) {

  
    }
  }
  
  export const deleteCommentFB = (magazine_id) => {
    return async function(dispatch, getState) {


    }
  }
  
  // reducer
  export default function reducer(state = initialState, action = {}) {
      switch (action.type) {
        case "comment/SET_COMMENT":
          return {magazine : action.magazine_list};
    
        case "comment/ADD_COMMENT": {
          const new_magazine_list = [...state.magazine, action.magazine];
          return { magazine: new_magazine_list };
        }
  
        case "comment/EDIT_COMMENT": {
          const new_magazine_list = state.magazine.map((a, idx) => 
            parseInt(action.magazine_index) === idx ? { ...a, ...action.magazine } : a);
          return { ...state, magazine: new_magazine_list };
        }
  
        case "comment/DELETE_COMMENT": {
        const new_magazine_list = state.magazine.filter((l, idx) => {
          return parseInt(action.magazine_index) !== idx;
        });
        return {magazine: new_magazine_list};
      }
        default:
          return state;
      }
    }