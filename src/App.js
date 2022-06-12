
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Singup from "./pages/Singup";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* 헤더 아이콘 추후 고민 */}      
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Detail" component={Detail} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit/:index/:id" component={Edit} />        
        <Route exact path="/Singup" component={Singup} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
