import axios from "axios";

const LOG_IN = 'user/LOG_IN';
const SING_UP = 'user/SING_UP';
const LOG_OUT = 'user/LOG_OUT';

const initialState = {
    user : [{
      userId : "",
      nickname : "",
      password : "",
      passwordCheck : ""
    }] ,
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
export const SignupFB = (userId, nickname ,password, passwordCheck) => {
  console.log(userId, nickname, password, passwordCheck)
    return async function (dispatch) {
      const _signup = await axios
        .post("http://localhost:5001/Signup", {
          userId: userId,
          nickname: nickname,
          password: password,
          passwordCheck: passwordCheck,
        })
        .then((response) => {
            console.log(response)
            dispatch(Singup(userId, nickname, password))
            const message = response.data.message

            window.alert("회원가입 했습니다!");
            window.location.assign("/Login");
        })
        .catch((error) => {
          const err_message = error.response.data.errorMessage;
          window.alert(err_message)
        })
    }
}

export const LoginFB = (userId, password) => {
  console.log(userId, password)
    return async function (dispatch, {history}) {
      const _login = await axios
      .post("http://localhost:5001/Login", {
        userId: userId,
        password: password,
      })
      .then((response) => {

        const token = response.data.token
        localStorage.setItem("token", token)

        dispatch(UsercheckFB())

        const message = response.data.message
        window.alert("로그인 했습니다!");
        window.location.assign("/");
      })
      .catch((error) => {
        const err_message = error.response.data.errorMessage;
        window.alert(err_message)
      })
    }
}

export const UsercheckFB = () => {
    return async function(dispatch) {
        await axios
        .get("http://localhost:5001/me") 
        .then((response) => {
           console.log(response);

           localStorage.setItem("loginUserId", response.data.userInfo.userId)
           localStorage.setItem("loginUserName", response.data.userInfo.nickname)  

           dispatch(Login(response.data.userInfo.userId, response.data.userInfo.nickname))

          })
          .catch((error) => {
            console.error(error)
          })
    }
  }

export const LogoutFB = () => {
    return function(dispatch) {
        localStorage.removeItem("userId");
        dispatch(Logout())
    }
  }
  
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "user/LOG_IN":
        state.user = { ...action.user }
        console.log(state.user)
        state.is_login = true;
        return state;
  
      case "user/SING_UP": 
        return null;

      case "user/LOG_OUT":
        state.user = {};
        state.is_login = false;
        return state;

      default:
        return state;
    }
  }  