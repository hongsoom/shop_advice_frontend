import instance from "../../shared/Request";

const LOAD_COMMENT = 'comment/LOAD_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const EDIT_COMMENT  = 'comment/EDIT_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

const initialState = {
  comments : [],
  comment : "",
  commentId : null,
  editcomment : "",
};

export const loadComment = (comment_list) => {
    return { type: LOAD_COMMENT, comment_list};
};

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment};
};

export const editComment = (commentId, comment) => {
    return { type: EDIT_COMMENT, commentId, comment};
};

export const deleteComment  = (commentId) => {
    return { type: DELETE_COMMENT, commentId };
};

// middlewares
export const loadCommentFB = (articleId) => {
  console.log(articleId)
    return async function (dispatch) {
      const _loadcomment = await instance
      .get(`/api/comment/${articleId}`)
      .then((response) => {
        console.log(response)
        
        const comment_list = response.data.comments
        console.log(comment_list)

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
    console.log(articleId, comment)
      return async function (dispatch) {
        const _addcomment = await instance
        .post(`/api/comment/${articleId}`, {
          comment : comment
        }, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
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
  
export const editCommentFB = (commentId, comment) => {
  console.log(comment)
    return async function(dispatch,getState) {
      const _editcomment = await instance
      .put(`/api/comment/${commentId}`, {
        comment : comment
      }, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then((response) => {
        console.log(response)

        const message = response.data.message
        window.alert(message);

        dispatch(editComment(commentId, comment))
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
      .delete(`/api/comment/${commentId}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then((response) => {
        console.log(response)

        const message = response.data.message
        window.alert(message);

        dispatch(deleteComment(commentId))
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
        case 'comment/LOAD_COMMENT':
          return { comments : action.comment_list };
    
        case 'comment/ADD_COMMENT': {
          const new_comment_list = [...state.comments, action.comment];
          const new_commnet = action.comment;
            return { comments :  new_comment_list, comment : new_commnet };
        }
  
      case 'comment/EDIT_COMMENT': {
          const new_comment_list = state.comments.map((a, idx) => 
            parseInt(action.commentId) === a.commentId? { ...a, ...action.comment } : a);
            const new_commnet = action.comment;
            console.log(new_commnet)
          return { ...state, comments: new_comment_list, editcomment : new_commnet };
        } 
  
        case 'comment/DELETE_COMMENT': {
        const new_comment_list = state.comments.filter((l) => {
          return parseInt(action.commentId) !== l.commentId;
        });
        return { comments : new_comment_list, commentId : action.commentId };
      } 
        default:
          return state;
      }
    }