import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import GBG from "./images/GBG.png"
import logo from './images/logo.png';
import Landing_Page from "./images/Landing_Page.gif"
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Rules } from './components/Rules';

function App() {
  return (
    <Router>
    <div>
      <div className="background" style={{ backgroundImage: `url(${GBG})` }}>

      <Switch> 
            <Route exact path='/'>
              <div className="landing_page" style={{ backgroundImage: `url(${Landing_Page})` }}>
              <Home />
              </div>
            </Route>
            <Route exact path='/game'>
              <Game />
            </Route>
            <Route exact path='/rules'>
              <Rules />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;