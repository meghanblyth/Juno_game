import { useState } from 'react';
import { Card } from './Card';
import { drawCard, drawStarterHand } from '../utils/Deck';
import { PlayerHand } from './PlayerHand';
import { ComputerHand } from './ComputerHand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { Messages } from './Messages';

export const Game = () => {

  const refreshPage = () => {
    window.location.reload(false);
  }

  console.log("Top of game")


  // Onscreen Computer Turn Messages
  const [messages, setMessages] = useState(["🤖 'Bleep bleep bloop bloop'", "🤖 'I'm a Juno master'", "🤖 'No way you're gonna beat me!'", "🤖 'Bleep bleep bloop bloop'"])

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
  const [playerHand, setPlayerHand] = useState(drawStarterHand);
  const [computerHand, setComputerHand] = useState(drawStarterHand);



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

      updateMessages(`👀 Computer drew a card...`)
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

        updateMessages(`😏 Computer played a ${newMatchCard.colour} ${newMatchCard.number}! `)

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

    <div className="Game">

      {
        // If player won
        playerHand.length === 0 ?
          <div>
            <section class="hero is-primary is-fullheight">
              <div class="hero-body">
                <div class="container">

                  <div class="columns is-centered">
                    <div class="column is-half">

                      <div class="box">
                        <div class="columns is-centered is-vcentered">
                          <div class="column is-half">
                            <img src="Assets/win.gif" class="image"></img>
                          </div>

                          <div class="column is-half has-text-centered">
                            <h1 class="is-size-1">You won!</h1>
                            <br></br>

                            <button class="button is-medium is-danger" onClick={refreshPage}>
                              <span class="icon">
                                <FontAwesomeIcon icon={faRotateRight} />
                              </span>
                              <span>Play again</span>
                            </button>

                          </div>

                        </div>
                      </div>

                    </div>
                  </div>


                </div>
              </div>
            </section>
          </div>

          // If player lost
          :
          (computerHand.length === 0 ?

            <div>
              <section class="hero is-primary is-fullheight">
                <div class="hero-body">
                  <div class="container">

                    <div class="columns is-centered">
                      <div class="column is-half">

                        <div class="box">
                          <div class="columns is-centered is-vcentered">
                            <div class="column is-half">
                              <img src="Assets/lose.gif" class="image"></img>
                            </div>

                            <div class="column is-half has-text-centered">
                              <h1 class="is-size-1">You lost!</h1>
                              <br></br>

                              <button class="button is-medium is-danger" onClick={refreshPage}>
                                <span class="icon">
                                  <FontAwesomeIcon icon={faRotateRight} />
                                </span>
                                <span>Play again</span>
                              </button>

                            </div>

                          </div>
                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </section>
            </div>

            // If game is still playing
            :
            <div>
              <section class="section">
                <div class="container is-fullhd">

                  <div>
                    {/* Top row */}
                    <div className="columns is-centered is-mobile is-multiline">
                      <div className="column">
                        <img src="Assets/Logo_eighth.png" class="image"></img>
                      </div>
                    </div>

                    <div className="columns is-centered is-mobile is-multiline">
                      <div className="column">
                        <h1 class="title has-text-right" >Computer's Hand</h1>
                        <ComputerHand computerHand={computerHand} />
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section class="section">
                <div class="container is-fullhd">

                  {/* Middle row */}
                  <div className="columns is-centered is-mobile is-multiline is-vcentered ">

                    <div className="column is-one-third has-text-centered">
                      <p>
                        <button class="button is-medium is-danger" onClick={() => handleCardDraw('player')}>
                          <span class="icon">
                            <FontAwesomeIcon icon={faHand} />
                          </span>
                          <span>Draw a card</span></button>
                      </p>
                    </div>

                    <div className="column is-one-third has-text-centered is-mobile is-multiline ">
                      <h1 class="title has-text-centered">Matching Card</h1>
                      <div className="image is-inline-block">
                        <Card colour={matchCard.colour} number={matchCard.number} onClick={() => { }} />
                      </div>
                    </div>

                    <div className="column is-one-third is-mobile is-multiline has-text-weight-medium">
                      <div class="box">
                        <Messages messages={messages} />
                      </div>
                    </div>

                  </div>

                </div>
              </section>

              <section class="section">
                <div class="container is-fullhd">

                  {/* Bottom row */}
                  <div className="columns is-centered">
                    <div className="column">
                      <h1 class="title">Your Hand</h1>
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


  )
}
