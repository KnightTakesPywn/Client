import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect 
} from 'react-router-dom';

import ChatRoom from './components/ChatRoom';
import GamePage from './components/GamePage';
import TestChessBoard from './components/TestChessBoard'
import LandingPageForm from './components/LandingPage';
import AboutUs from './components/AboutUs'

const url = 'http://localhost:8000/'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username : '',
    }
  }

  playerHandlerLogin = data => {
    this.setState({
      username : data.username
    })
  }

  render(){
    return (
      <Router>
        <div className= 'App'>
          <Switch>
            <Route exact path='/'>
              <LandingPageForm onSubmit={this.playerHandlerLogin}  />
            </Route>
            <Route exact path='/chat'>
              <ChatRoom room={1} username={this.state.username}/>
            </Route>
            <Route exact path='/chess'>
              <TestChessBoard room={1} username={this.state.username}/>
            </Route>

            <Route exact path='/aboutUs'>
              <AboutUs />
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
