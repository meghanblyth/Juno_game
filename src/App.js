import './App.css';
import { useState } from 'react';
import { Card } from './components/Card';

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
  const handleCardClick = (colour, number) => {
    if (colour === matchCard.colour || number === matchCard.number) {
      const newMatchCard = {
        colour: colour,
        number: number
      }
      setMatchCard(newMatchCard);
    }
  }

  return (
    <div className="App">
      <p>Juno!</p>

      <p>Matching card:
        {matchCard.colour}, {matchCard.number}
      </p>


      <p>Hand:</p>

      {/* Currently, the hand array isn't matching the hand output */}
      <p>
        {
          hand.map(
            ({ colour, number }) => <button onClick={handleCardClick(colour, number)}> {
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

    </div>
  );

}

export default App;
