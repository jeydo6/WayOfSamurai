import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;