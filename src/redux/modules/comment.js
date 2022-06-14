import instance from "../../shared/Request";

const LOAD_COMMENT = 'comment/LOAD_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const EDIT_COMMENT  = 'comment/EDIT_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

const initialState = {
    comment : [{
    }] 
};

export const loadComment = (comment_list) => {
    return { type: LOAD_COMMENT, comment_list };
};

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment };
};

export const editComment = (user) => {
    return { type: EDIT_COMMENT, user };
};

export const deleteComment  = (user) => {
    return { type: DELETE_COMMENT, user };
};

// middlewares
export const loadCommentFB = (articleId) => {
    return async function (dispatch) {
      const _loadcomment = await instance
      .get(`/api/comment/${articleId}`)
      .then((response) => {
        console.log(response)

        const comment_list = [];

        dispatch(loadComment(comment_list))
      })
      .catch((error) => {
        console.log(error)
        const err_message = error.response.data.errorMessage;
        window.alert(err_message)
      })
    }
  }
  
  export const addCommentFB = (articleId, comment) => {
      return async function (dispatch) {
        const _addcomment = await instance
        .post(`/api/comment/${articleId}`, {
          comment : comment,
        })
        .then((response) => {
          console.log(response)

          const message = response.data.message
          window.alert(message);

          dispatch(addComment(comment))
        })
        .catch((error) => {
          console.log(error)
          const err_message = error.response.data.errorMessage;
          window.alert(err_message)
        })
    }
  }
  
  export const editCommentFB = (commentId) => {
    return async function(dispatch,getState) {
      const _editcomment = await instance
      .put(`/api/comment/${commentId}`, {

      })
      .then((response) => {
        console.log(response)

        const message = response.data.message
        window.alert(message);

        dispatch(editComment())
      })
      .catch((error) => {
        console.log(error)
        const err_message = error.response.data.errorMessage;
        window.alert(err_message)
    })
  }
}
  
export const deleteCommentFB = (commentId) => {
    return async function(dispatch, getState) {
      const _deletecomment = await instance
      .delete(`/api/comment/${commentId}`)
      .then((response) => {
        console.log(response)

        const message = response.data.message
        window.alert(message);

        dispatch(deleteComment())
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
        case "comment/LOAD_COMMENT":
          return {comment : action.comment_list};
    
        case "comment/ADD_COMMENT": {
          const new_comment_list = [...state.comment, action.comment];
          return { comment: new_comment_list };
        }
  
        case "comment/EDIT_COMMENT": {
          const new_comment_list = state.comment.map((a, idx) => 
            parseInt(action.comment_index) === idx ? { ...a, ...action.comment } : a);
          return { ...state, comment: new_comment_list };
        }
  
        case "comment/DELETE_COMMENT": {
        const new_comment_list = state.comment.filter((l, idx) => {
          return parseInt(action.comment_index) !== idx;
        });
        return { comment: new_comment_list};
      }
        default:
          return state;
      }
    }