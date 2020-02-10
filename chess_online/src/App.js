import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Redirect 
} from 'react-router-dom';
import LandingPage from './components/LandingPage';


class App extends React.Component{

  render(){
    return (
      <Router>
        <div className= 'App'>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
