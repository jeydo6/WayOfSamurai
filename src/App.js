import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
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
            <Route path='/profile' render={() => <Profile store={props.store} />} />
            <Route path='/dialogs' render={() => <Dialogs store={props.store} />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;