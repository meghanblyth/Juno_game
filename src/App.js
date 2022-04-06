import './App.css';
import { Card } from './components/Card';

function App() {

  // Deck (random values)
  const number = Math.floor(Math.random() * 10);

  const colourChoices = ['red', 'green', 'yellow', 'blue'];

  const colour = colourChoices[Math.floor(Math.random()*colourChoices.length)];
  

    return (
    <div className="App">

      <p>Juno!</p>

      {/* Cards */}
      <Card colour={colour} number={number}/>

    </div>
  );

}

export default App;
