import './App.css';
import { Card } from './components/Card';

function App() {

  // Deck (random values)
  const drawCard = () => {
    const number = Math.floor(Math.random() * 10);
    const colourChoices = ['red', 'green', 'yellow', 'blue'];
    const colour = colourChoices[Math.floor(Math.random()*colourChoices.length)];

    const randomCard = {
      colour: colour,
      number: number
    };

    return randomCard;
  }

  // Hand (collection of cards)
  let hand = [];

  hand.push( drawCard() );
  console.log(hand);

  hand.push( drawCard() );
  console.log(hand);


    return (
    <div className="App">

      <p>Juno!</p>

      <p>Hand:</p>
      
      <p> {

        hand.map(
          ({ colour, number }) => <li>{`Colour: ${colour} Number: ${number}` }</li>
        )
      }</p>


      {/* Display hand of cards */}
      <Card colour={drawCard().colour} number={drawCard().number}/>

    </div>
  );

}

export default App;
