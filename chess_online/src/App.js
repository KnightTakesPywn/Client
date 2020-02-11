import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect 
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatRoom from './components/ChatRoom'


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
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
