import React, { Component } from 'react'
import './App.css'
import Cabecalho from './Cabecalho.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Configuracao from "./Configuracao.jsx";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      logged: true
    }
  }

  onLogin = () => {
    this.setState(!this.state.logged)
  }

  render() {

    return (
      <div>
        <BrowserRouter>
          <div>
            <Cabecalho logged={this.state.logged} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/configuracao" exact component={Configuracao} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
