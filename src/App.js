// import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useReducer, useEffect, createContext } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/main.scss'
import CovidTracker from './pages/CovidTracker';
import AboutCovid from './pages/AboutCovid';
import { coronaInfoReducer, infoInitialState } from './reducer/coronaInfoReducer';
import { getCountryData, getCountryName, getGlobalData } from './action/coronaInfoAction';

export const CoronaContext = createContext()

function App() {
  const [state, dispatch] = useReducer(coronaInfoReducer, infoInitialState)

  useEffect(() => {
    getCountryName(dispatch)
    if (state.currentCountryName) {
      getCountryData(dispatch, state.currentCountryName)
    } else {
      getGlobalData(dispatch)
    }
  }, [state.currentCountryName])


  return (
    <CoronaContext.Provider value={{state, dispatch}}>
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={CovidTracker}/>
            <Route exact path='/about' component={AboutCovid}/>
          </Switch>
        <Footer />
    </Router>
    </CoronaContext.Provider>
  );
}

export default App;
