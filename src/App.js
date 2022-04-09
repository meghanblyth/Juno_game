import './App.css';
import { useState } from 'react';
import Table_4 from "./images/Table_4.png"
// import { Home } from './components/Home';
// import { Rules } from './components/Rules';
import { Card } from './components/Card';
import { Game } from './components/Game';
// import { ComputerHand } from './components/ComputerHand';
// import { Deck } from './components/Deck';
// import { Matcher } from './components/Matcher';
// import { PlayerHand } from './components/PlayerHand';

function App() {

  // Deck (random values)
  const drawCard = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const colourChoices = ['red', 'green', 'yellow', 'blue'];
    const randomColour = colourChoices[Math.floor(Math.random() * colourChoices.length)];

    const randomCard = {
      colour: randomColour,
      number: randomNumber
    };

    return randomCard;
  }

  // Match Card
  const [matchCard, setMatchCard] = useState(drawCard());

  // Hand (collection of cards)
  const [hand, setHand] = useState([]);

  // Draw a card
  const handleDrawCard = () => {
    const newHand = hand.concat(drawCard());
    setHand(newHand);
    //hand.push(drawCard());
    console.log(hand);
  }

  // Play a card
  const handleCardClick = (colour, number, i) => {

    // If card matches, update Match card
    if (colour === matchCard.colour || number === matchCard.number) {
      const newMatchCard = {
        colour: colour,
        number: number
      }

      setMatchCard(newMatchCard);

      // Remove card from hand (by index)
      const newHand = hand.slice(0, i).concat(hand.slice(i + 1, hand.length))
      setHand(newHand);
    }

  }

  return (

    <div className="background" style={{ backgroundImage: `url(${Table_4})` }}>

    <div className="App">
      <p><h1><strong>Juno!</strong></h1></p>
      {/* <Game /> */}

      <p>Matching card:
        {matchCard.colour}, {matchCard.number}
      </p>

      <p>Hand:</p>

      <p>
        {
          hand.map(
            ({ colour, number }, i) => <button onClick={() => handleCardClick(colour, number, i)}> {
              `Colour: ${colour} Number: ${number}`
            } </button>
          )
        }

        {/* {
          hand.map(
            ({ colour, number }) => <li> {
              <Card colour={colour} number={number} />
            } </li>
          )
        } */}

      </p>

      <p>
        <button onClick={handleDrawCard}>Draw a card</button>
      </p>
      
      <Card />

    </div>
    </div>
  );

}

export default App;
