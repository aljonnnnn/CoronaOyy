import './App.css';
import CovidTracker from './components/pages/CovidTracker';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutCovid from './components/pages/AboutCovid'

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={CovidTracker}/>
          <Route exact path='/about' component={AboutCovid}/>
        </Switch>
    </Router>
  );
}

export default App;
