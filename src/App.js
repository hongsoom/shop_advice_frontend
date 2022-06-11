<<<<<<< HEAD
import React from "react";
import { Route, Switch } from "react-router-dom";

import Singup from "./pages/Singup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
=======
import './App.css';
>>>>>>> 32442c2c289a201954b3896abc61ab4f7b9e9872

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
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Singup" component={Singup} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/Detail" component={Detail} />
=======
      {/* 헤더 아이콘 추후 고민 */}      
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Detail/:index/:id" component={Detail} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit/:index/:id" component={Edit} />        
        <Route exact path="/Singup" component={Singup} />
        <Route exact path="/Login" component={Login} />
>>>>>>> 32442c2c289a201954b3896abc61ab4f7b9e9872
      </Switch>
    </div>
  );
}

export default App;
