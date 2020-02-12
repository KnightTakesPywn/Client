import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect 
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatRoom from './components/ChatRoom';
import GamePage from './components/GamePage';


class App extends React.Component{

  render(){
    return (
      <Router>
        <div className= 'App'>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/chat'>
              <ChatRoom />
            </Route>
            <Route exact path='/gamepage'>
              <GamePage />
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
