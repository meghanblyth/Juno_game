import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' ;
import Table_4 from "./images/Table_4.png"
import { Game } from './components/Game';
import { Home } from './components/Home';
import { Rules } from './components/Rules';

function App() {
  return (
    <div>
    {/* <div className="background" style={{ backgroundImage: `url(${Table_4})` }}> */}

      {/* <Switch> 
            <Router exact path='/'>
              <Home/>
            </Router>
            <Router exact path='/game'> */}

              <Game/>

            {/* </Router>
            <Router exact path='/rules'>
              <Rules/>
            </Router>
          </Switch> */}

    </div>

  );
}

export default App;