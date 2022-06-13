import { setCookie, deleteCookie } from "../../shared/Cookie"
import instance from "../../shared/Request"

const LOG_IN = 'user/LOG_IN';
const SING_UP = 'user/SING_UP';
const LOG_OUT = 'user/LOG_OUT';

const initialState = {
    user : "",
    name : "",
    is_login: false,
};

export const Login = (user) => {
    return { type: LOG_IN, user };
};

export const Singup = (user) => {
    return { type: SING_UP, user };
};

export const Logout = (user) => {
    return { type: LOG_OUT, user };
};

// middlewares
export const SingupFB = (userId, nickname ,password, passwordCheck) => {
    return async function (dispatch, {history}) {
        instance
        .post(`/api/user/signup`, {
          userId: userId,
          nickname: nickname,
          password: password,
          passwordCheck: passwordCheck,
        })
        .then((response) => {
          dispatch(Singup(userId, nickname, password))
          const message = response.data.message
          window.alert(message);
          history.push("/login")
        })
        .catch((error) => {
          const err_message = error.response.data.errorMessage
          window.alert(err_message)
        })
    }
}

export const LoginFB = (userId, password) => {
    return async function (dispatch, {history}) {
        instance
      .post("/api/user/login", {
        userId: userId,
        password: password,
      })
      .then((response) => {

        const token = response.data.token
        setCookie("token", token)

        localStorage.setItem("loginUserId", response.data.userId)
        localStorage.setItem("loginUserName", response.data.nickname)

        dispatch(Login({ userId : userId}))

        const message = response.data.message
        window.alert(message);

        // history.push("/")
        window.location.href = "/"
      })
      .catch((error) => {
        const err_message = error.response.data.errorMessage
        window.alert(err_message)
      })
    }
}

export const UserCheck = () => {
    return async function(dispatch) {
    }
  }


export const LogoutFB = () => {
    return async function(dispatch) {

    }
  }
  
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "user/LOG_IN":
        return 
  
      case "user/SING_UP": 
        return

      case "user/LOG_OUT":
        return 

      default:
        return state;
    }
  }  