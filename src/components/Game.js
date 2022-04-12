import { useState } from 'react';
import { Card } from './Card';
import { drawCard, drawStarterHand } from '../utils/Deck';
import { PlayerHand } from './PlayerHand';
import { ComputerHand } from './ComputerHand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

export const Game = () => {

  console.log("Top of game")


  // Onscreen Computer Turn Messages
  const [messages, setMessages] = useState([])

  // Function that updates the messages, 
  // but only keeps 4 most recent messages
  const updateMessages = (message) => {

    // Add new message
    const newMessages = messages.concat(message);

    // Only have a max of 4 messages
    if (messages.length > 3) {
      newMessages.shift();
    }

    // Update message array
    setMessages(newMessages);
  }


  // Match Card
  const [matchCard, setMatchCard] = useState(drawCard());

  // playerHand (collection of cards)
  const [playerHand, setPlayerHand] = useState(drawStarterHand());
  const [computerHand, setComputerHand] = useState(drawStarterHand());



  // Draw a card
  const handleCardDraw = (turn) => {

    if (turn === 'player') {
      const newCard = drawCard();
      const newPlayerHand = playerHand.concat(newCard);
      setPlayerHand(newPlayerHand);

      //console.log(playerHand);
      handleComputerTurn();

    } else {
      const newCard = drawCard();
      const newComputerHand = computerHand.concat(newCard);
      setComputerHand(newComputerHand);

      updateMessages(`Computer drew a card!`)
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

      console.log(playerHand.length);
      console.log(newPlayerHand.length);

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

        updateMessages(`Computer played a ${newMatchCard.colour} ${newMatchCard.number}! `)

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

  // 
  return (

    <section class="section">

      <div class="container is-fullhd">

        <div className="Game">

          <div className="columns is-centered">
            <div className="column"><h1><strong>Juno!</strong></h1></div>
          </div>

          {/* <Game /> */}

          {playerHand.length === 0 ? <p>You won!</p> :

            (computerHand.length === 0 ? <p>You lost!</p> :

              <div>
                <section class="section">
                  <div class="container is-fullhd">

                    <div>
                      {/* Top row */}
                      <div className="columns is-centered is-mobile is-multiline">
                        <div className="column">
                          <p>Computer Hand:</p>
                          <ComputerHand computerHand={computerHand} />
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
                
                <section class="section">
                  <div class="container is-fullhd">

                    {/* Middle row */}
                    <div className="columns is-centered is-mobile is-multiline">

                      <div className="column is-one-third">
                        <p>
                          <button class="button is-medium is-danger" onClick={() => handleCardDraw('player')}>
                            <span class="icon">
                              <FontAwesomeIcon icon={faHand}/>
                            </span>
                            <span>Draw a card</span></button>
                        </p>
                      </div>

                      <div className="column is-one-third">
                        <div className="image is-128x128">Matching card:
                          <Card colour={matchCard.colour} number={matchCard.number} onClick={() => { }} />
                        </div>
                      </div>

                      <div className="column is-one-third is-mobile is-multiline">
                        <p>
                          {messages}
                        </p>
                      </div>

                    </div>

                  </div>
                </section>
                
                <section class="section">
                  <div class="container is-fullhd">

                    {/* Bottom row */}
                    <div className="columns is-centered">
                      <div className="column">
                        <p>Hand:</p>
                        <PlayerHand playerHand={playerHand}
                          onCardClick={playerHandleCardClick} />
                      </div>
                    </div>

                  </div>
                </section>
              </div>
            )
          }

        </div>

      </div>
    </section >

  )
}
