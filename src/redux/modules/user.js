import instance from "../../shared/Request";

const LOG_IN = 'user/LOG_IN';
const LOGIN_CHECK = 'user/LOGIN_CHECK';
const CHECK = 'user/CHECK';
const LOG_OUT = 'user/LOG_OUT';

const initialState = {
  token : "",
  userId : "",
  nickname : "",
  is_login : false,
};

export const Login = (token) => {
    return { type: LOG_IN, token};
};

export const Logincheck = (userId, nickname) => {
    return { type: LOGIN_CHECK, userId, nickname };
};

export const Check = () => {
  return { type: CHECK };
};

export const Logout = () => {
    return { type: LOG_OUT };
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
        localStorage.setItem("token", token);
        console.log(token)

        dispatch(Login(token))

        instance
        .get("/api/user/me", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          console.log(response);
          
          const userId = response.data.userInfo.userId
          const nickname = response.data.userInfo.nickname

          localStorage.setItem("userId", userId)
          localStorage.setItem("nickname", nickname)

          dispatch(Logincheck(userId,nickname));
          })
          .catch((error) => {
            console.error(error)
          }) 
          history.push("/");
        window.location.reload();

      }).catch((error) => {
        console.log(error)
        const err_message = error.response.data.errorMessage;
        window.alert(err_message)
      })
    }
  }

/* export const logincheckFB = () => {
    return function(dispatch) {
        const _logincheck =  instance
        .get("/api/user/me")
        .then((response) => {
          console.log(response);
          
          const userId = response.data.userInfo.userId
          const nickname = response.data.userInfo.nickname

          localStorage.setItem("userId", userId)
          localStorage.setItem("nickname", nickname)

          dispatch(Logincheck(userId,nickname));
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
 */

export const idCheckFB = (userId) => {
  console.log(userId)
    return async function () {
      const _idCheck = await instance
        .post("/api/user/dup_userId", {
          userId : userId
        })
        .then((response) => {
          console.log(response);

          const message = response.data.message
          window.alert(message);
        })
        .catch((error) => {
          console.log(error)
          const error_message = error.response.data.errorMessage; 
          window.alert(error_message)
        })
    }
  }

  export const nicknameCheckFB = (nickname) => {
    console.log(nickname)
    return async function () {
      const _nicknameCheck = await instance
        .post("/api/user/dup_nickname", {
          nickname : nickname
        })
        .then((response) => {
          console.log(response);

          const message = response.data.message;
          window.alert(message);
        })
        .catch((error) => {
          console.log(error)
          const error_message = error.response.data.errorMessage;
            window.alert(error_message)
        })
    }
  }

export const logincheckFB = () => {
    return function(dispatch, getState, { history }) {
      dispatch(Check());
    }
}

export const LogoutFB = () => {
    return function(dispatch, getState, { history }) {
        dispatch(Logout());
        window.location.reload();
    }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/LOG_IN':
      state.is_login = true;
      state.token = action.token;
      console.log(state.is_login)
      console.log(state.token)
      return state;
  
    case 'user/LOGIN_CHECK':
      state.userId = action.userId;
      state.nickname = action.nickname;
      console.log(state.is_login)
      console.log(state.userId)
      console.log(state.nickname)
      return state; 

    case 'user/CHECK':
      console.log(state.is_login)
      console.log(state.userId)
      console.log(state.nickname)
      return state; 

    case 'user/LOG_OUT':
      state.is_login = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      localStorage.removeItem("token");
      console.log(state.is_login)
      return state;

    default:
      return state;
    }
  }  