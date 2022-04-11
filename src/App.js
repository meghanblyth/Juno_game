import './App.css';
import { useState } from 'react';
import Table_4 from "./images/Table_4.png"
import { Card } from './components/Card';
import { Game } from './components/Game';
// import { ComputerHand } from './components/ComputerHand';
// import { Deck } from './components/Deck';
// import { Matcher } from './components/Matcher';
// import { PlayerHand } from './components/PlayerHand';
import { CardList } from './components/New/CardList';
import { MyCard } from './components/New/CardList';


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

  const handleCardClick = (colour,number,position) => {

    // If card matches, update Match card
    if (colour === matchCard.colour || number === matchCard.number) {
      const newMatchCard = {
        colour: colour,
        number: number
      }

      setMatchCard(newMatchCard);

      // Remove card from hand (by index)
      const newHand = hand.slice(0, position).concat(hand.slice(position + 1, hand.length))
      setHand(newHand);
    }

  }

  return (


    <div className="background" style={{ backgroundImage: `url(${Table_4})` }}>

      <div className="App">
        <h1><strong>Juno!</strong></h1>

        <p>Matching card:
          {matchCard.colour}, {matchCard.number}
        </p>

        <p>Hand:</p>
        <>
        {/* Displays all the cards in the hand */}
          <CardList allcards={hand} onclickevent={handleCardClick} />
        </>

        <p>
          {/* Draws a card to the hand */}
          <button onClick={handleDrawCard}>Draw a card</button>
        </p>

        <Card />

      </div>
    </div>

  );
}

export default App;
