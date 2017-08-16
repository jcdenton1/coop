import React from "react";
import { Switch, Route } from 'react-router-dom'
import Geek from "../containers/Geek";
import Nerd from "../containers/Nerd";
import Home from "./Home";
import Error from "./Error";

export class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/geeks' component={ Geek } />
          <Route exact path='/nerds' component={ Nerd } />
          <Route exact path='/error' component={ Error } />
        </Switch>
      </main>
    );
  }
}

export default Main