import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logincheckFB } from "./redux/modules/user";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {

  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login)

  React.useEffect (() => {
      dispatch(logincheckFB());
    }, [is_login]);

  return (
    <div className="App">
      {/* 헤더 아이콘 추후 고민 */} 
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Detail/:index/:articleId" component={Detail} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit/:index/:articleId" component={Edit} />        
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
