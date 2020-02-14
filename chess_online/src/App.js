import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import ChatRoom from './components/ChatRoom';
import GamePage from './components/GamePage';
import TestChessBoard from './components/ChessSocket'
import LandingPageForm from './components/LandingPage';
import AboutUs from './components/AboutUs'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username : 'anonymous',
      room: 1
    }
  }

  playerHandlerLogin = data => {
    this.setState({
      username : data.username,
      room: data.room
    })
  }

  render(){
    console.log(this.state.room)
    return (
      <Router>
        <div className= 'App'>
          <Switch>
            <Route exact path='/'>
              <LandingPageForm onSubmit={this.playerHandlerLogin}  />
            </Route>
            <Route exact path='/chat'>
              <ChatRoom room={this.state.room} username={this.state.username}/>
            </Route>
            <Route exact path='/chess'>
              <TestChessBoard room={this.state.room} username={this.state.username}/>
            </Route>
            <Route exact path='/aboutUs'>
              <AboutUs />
            </Route>
            <Route exact path='/game'>
              <GamePage room={this.state.room } username={this.state.username}/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
