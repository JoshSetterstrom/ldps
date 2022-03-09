import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import './App.css';
import Main from "./common/main/main";
import LdTickets from "./common/ldtickets/ldtickets"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/ld-tickets' component={LdTickets}/>
      </Switch>
    </Router>
  )
}

export default App;