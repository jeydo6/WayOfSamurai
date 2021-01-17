import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/profile' component={Profile} />
            <Route path='/dialogs' component={DialogsContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;