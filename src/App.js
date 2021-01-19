import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div className='app-wrapper'>
          <Header />
          <Sidebar />
          <div className='app-wrapper-content'>
            <Switch>
              <Route path='/profile' component={ProfileContainer} />
              <Route path='/dialogs' component={DialogsContainer} />
              <Route path='/users' component={UsersContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;