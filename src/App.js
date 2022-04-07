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

  // playerHand (collection of cards)
  const [playerHand, setPlayerHand] = useState([]);
  const [computerHand, setComputerHand] = useState([]);

  // Turn
  const [turn, setTurn] = useState(0)

  // Draw a card
  const handleCardDraw = () => {
    const newPlayerHand = playerHand.concat(drawCard());
    setPlayerHand(newPlayerHand);
    console.log(playerHand);

    const newTurn = turn + 1;
    setTurn(newTurn);
  }

  // Play a card
  const playerHandleCardClick = (colour, number, i) => {

    // If card matches, update Match card
    if (colour === matchCard.colour || number === matchCard.number) {
      const newMatchCard = {
        colour: colour,
        number: number
      }

      setMatchCard(newMatchCard);

      // Remove card from playerHand (by index)
      const newPlayerHand = playerHand.slice(0, i).concat(playerHand.slice(i + 1, playerHand.length))
      setPlayerHand(newPlayerHand);

      const newTurn = turn + 1;
      setTurn(newTurn);
    }
  }

  return (
    <div className="App">
      <p>Juno!</p>

      <p>Turns: {turn}</p>

      <p>Matching card:
        {matchCard.colour}, {matchCard.number}
      </p>

      <p>Your hand:</p>

      <p>
        {
          playerHand.map(
            ({ colour, number }, i) => <button onClick={() => playerHandleCardClick(colour, number, i)}> {
              `Colour: ${colour} Number: ${number}`
            } </button>
          )
        }

        {/* {
          playerHand.map(
            ({ colour, number }) => <li> {
              <Card colour={colour} number={number} />
            } </li>
          )
        } */}

      </p>

      <p>
        <button onClick={handleCardDraw}>Draw a card</button>
      </p>

    </div>
  );

}

export default App;

/*
Computer Turn

- Starts game with 7 cards (each)

- Has a playerHand
- Draws a card
- Plays a card
  - Cycles through every card in it's playerHand array
    - If card is playable - play
    - Else if - try another card
    - Else - draw a card
- End Turn

- Feedback messages (2 second delay?)


while (winner=false) {
  playerTurn()
  computerTurn()
}

print 'game over!'
*/