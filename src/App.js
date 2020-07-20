import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import RegisterUser from "./Components/RegisterUser";
import UserValidation from "./Components/UserValidation";
import Navegation from "./Components/Navegation";
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
      <Navegation />
      </header>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/RegisterUser" component={RegisterUser} />
          <Route path="/UserValidation" component={UserValidation} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
