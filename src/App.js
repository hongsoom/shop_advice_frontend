import React from "react";
import { Route, Switch } from "react-router-dom";

import Singup from "./pages/Singup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Singup" component={Singup} />
        <Route exact path="/Add" component={Add} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/Detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
