import './App.css';
import { useState } from 'react';
import Table_4 from "./images/Table_4.png"
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

  // playerHand (collection of cards)
  const [playerHand, setPlayerHand] = useState([drawCard()]);
  const [computerHand, setComputerHand] = useState([drawCard()]);

  // Draw a card
  const handleCardDraw = (turn) => {

    if (turn === 'player') {
      const newPlayerHand = playerHand.concat(drawCard());
      setPlayerHand(newPlayerHand);
      //console.log(playerHand);
      handleComputerTurn();
    } else {
      const newComputerHand = computerHand.concat(drawCard());
      setComputerHand(newComputerHand);
      //console.log(computerHand);
    }

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

      handleComputerTurn();
    }
  }




  // Computer Turn
  const handleComputerTurn = () => {

    // 1. Computer tries to play a card from their hand

    let didPlayCard = false;

    for (let i = 0; i < computerHand.length; i++) {

      const colour = computerHand[i].colour;
      const number = computerHand[i].number;

      // If card matches, update Match card
      if (colour === matchCard.colour || number === matchCard.number) {
        const newMatchCard = {
          colour: colour,
          number: number
        }

        setMatchCard(newMatchCard);

        // Remove card from playerHand (by index)
        const newComputerHand = computerHand.slice(0, i).concat(computerHand.slice(i + 1, computerHand.length))
        setComputerHand(newComputerHand);

        console.log("Computer played a card: " + colour + number)
        console.log("Computer has " + computerHand.length + "cards in their hand")

        didPlayCard = true;
        break;
      }
    }

    // 2. If no card was played, draw a card
    if (didPlayCard === false) {
      handleCardDraw();
      console.log("Computer drew a card")
      console.log("Computer has " + computerHand.length + "cards in their hand")
    }

  }


  //   endTurn() (print what it did)






  return (

    <div className="background" style={{ backgroundImage: `url(${Table_4})` }}>

    <div className="App">
      <p><h1><strong>Juno!</strong></h1></p>
      {/* <Game /> */}



      <p>Matching card:
        {matchCard.colour}, {matchCard.number}
      </p>

      <p>Your hand:</p>

      <p>
        {
          playerHand.map(
            ({ colour, number }, i) => <button key={i} onClick={() => playerHandleCardClick(colour, number, i)}> {
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
        <button onClick={() => handleCardDraw('player')}>Draw a card</button>
      </p>

      <Card />

    </div>
    </div>
  );
}

export default App;

/*
Computer Turn

- Starts game with 7 cards (each)

- Has a player Hand
- Draws a card
- Plays a card
  - Cycles through every card in it's playerHand array
    - If card is playable - play
    - Else if - try another card
    - Else - draw a card
- End Turn

- Feedback messages (2 second delay?)


print 'game over!'
*/