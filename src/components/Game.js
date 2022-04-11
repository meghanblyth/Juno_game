import { useState } from 'react';
import { Card } from './Card';
import { ComputerHand } from './ComputerHand';
import { drawCard } from '../utils/Deck';
import { Matcher } from './Matcher';
import { PlayerHand } from './PlayerHand';

export const Game = () => {

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


    <div className="App">

      <h1><strong>Juno!</strong></h1>
      {/* <Game /> */}

      <p>Matching card:
        {matchCard.colour}, {matchCard.number}
      </p>

      <p>Hand:</p>

      <p>
 
        {
          playerHand.map(
            ({ colour, number }, i) => <li> {
              <Card colour={colour} number={number} playerHandleCardClick={playerHandleCardClick} i={i} />
            } </li>
          )
        }

      </p>

      <p>
        <button onClick={() => handleCardDraw('player')}>Draw a card</button>
      </p>


    </div>



  )
}
