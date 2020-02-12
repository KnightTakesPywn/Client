import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect 
} from 'react-router-dom';
import ChatRoom from './components/ChatRoom'
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
              <ChatRoom username={this.state.username}/>
            </Route>
            <Route exact path='/aboutUs'>
              <AboutUs />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
