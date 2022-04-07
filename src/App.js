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
  const handleCardClick = (colour, number, i) => {

    // If card matches, update Match card
    if (colour === matchCard.colour || number === matchCard.number) {
      const newMatchCard = {
        colour: colour,
        number: number
      }

      setMatchCard(newMatchCard);

      console.log("i:" + i);

      // Remove card from hand (by index)
      // const newHand = hand.filter((card) => card.index !== i);
      //   //setHand((hand) => hand.filter((hand) => hand.index !== i))
      //let newHand = hand;

      // [0, 1, 2, 3, 4]

      const newHand = hand.slice(0, i).concat(hand.slice(i + 1, hand.length))

      setHand(newHand);
      console.log(hand);


      // deleteCard = index => {
      //   this.setState(prevState => ({
      //     tasks: prevState.tasks.filter((item, itemIndex) => itemIndex != index)
      //   }))
      // }


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
            ({ colour, number }, i) => <button key={i} onClick={() => handleCardClick(colour, number, i)}> {
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
