import instance from "../../shared/Request";

const LOG_IN = 'user/LOG_IN';
const LOGIN_CHECK = 'user/LOGIN_CHECK';
const LOG_OUT = 'user/LOG_OUT';

const initialState = {
    userId : null,
    nickname : null,
    password : null,
    is_login: false,
};

export const Login = (user) => {
    return { type: LOG_IN, user};
};

export const Logincheck = (userId, nickname) => {
    return { type: LOGIN_CHECK, userId, nickname };
};

export const Logout = (user) => {
    return { type: LOG_OUT, user };
};

// middlewares
export const SignupFB = (userId, nickname ,password, passwordCheck) => {
  console.log(userId, nickname, password, passwordCheck)
    return async function (dispatch, getState, {history}) {
      const _signup = await instance
        .post("/api/user/signup", {
          userId: userId,
          nickname: nickname,
          password: password,
          passwordCheck: passwordCheck,
        })
        .then((response) => {
            console.log(response)

            const message = response.data.message
            window.alert(message);

            history.push("/Login");
        })
        .catch((error) => {
          console.log(error)
          const err_message = error.response.data.errorMessage;
          window.alert(err_message)
        })
    }
}

export const LoginFB = (userId, password) => {
  console.log(userId, password)
    return async function (dispatch, getState, { history }) {
      const _login = await instance
      .post("/api/user/login", {
        userId : userId,
        password : password,
      })
      .then((response) => {
        console.log(response)

        const token = response.data.token
        localStorage.setItem("token", token)

        dispatch(Login());

        history.push("/");

      })
      .catch((error) => {
        console.log(error)
        const err_message = error.response.data.errorMessage;
        window.alert(err_message)
      })
    }
}

export const logincheckFB = () => {
    return async function(dispatch) {
        const _logincheck = await instance
        .get("/api/user/me")
        .then((response) => {
          console.log(response);

           localStorage.setItem("loginUserId", response.data.userInfo.userId)
           localStorage.setItem("loginUserName", response.data.userInfo.nickname)

           dispatch(Logincheck(response.data.userInfo.userId, response.data.userInfo.nickname));
          })
          .catch((error) => {
            console.error(error)
          })
    }
  }

export const idCheckFB = (userId) => {
  console.log(userId)
    return async function () {
      const _idCheck = await instance
        .get(`/api/user/dup_userId/${userId}`)
        .then((response) => {
          console.log(response);

          const message = response.data.message
          window.alert(message);
        })
        .catch((error) => {
          console.error(error)
          const error_message = error.response.data.errorMessage; 
          window.alert(error_message)
        })
    }
  }

  export const nicknameCheckFB = (nickname) => {
    console.log(nickname)
    return async function () {
      const _nicknameCheck = await instance
        .get(`/api/user/dup_nickname/${nickname}`)
        .then((response) => {
          console.log(response);

          const message = response.data.message;
          window.alert(message);
        })
        .catch((error) => {
          console.error(error)
          const error_message = error.response.data.errorMessage;
            window.alert(error_message)
        })
    }
  }

export const LogoutFB = () => {
    return function(dispatch) {
        localStorage.removeItem("loginUserId");
        localStorage.removeItem("loginUserName");
        localStorage.removeItem("token");
        dispatch(Logout())
    }
  }
  
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "user/LOG_IN":
        return {is_login: true}
  
      case "user/LOGIN_CHECK": 
        console.log(action.userId, action.nickname)
        return {userId : action.userId, nickname : action.nickname}; 

      case "user/LOG_OUT":
        return {is_login: false}

      default:
        return state;
    }
  }  