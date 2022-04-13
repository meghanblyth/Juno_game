import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <div className="Home">

      <section class="section">
        <div class="container is-fullhd has-text-centered has-text-white">

          <div className="columns is-centered is-mobile is-multiline">
            <div className="column is-half ">
              <img src="Assets/Logo_quarter.png" class="image"></img>
            </div>
          </div>


          <h1 class="title is-1 has-text-white">Each turn:</h1>
          <p>Play a card from your hand by matching it’s colour or number with the Match card in the middle.</p>

          <br></br>

          <p>If don’t have any cards you can play, then draw a card to end your turn.</p>

          <br></br>

          <p>First to get rid of all of their cards wins!</p>

          <br></br>

          <Link to={'/Game'}>
            <button class="button is-large">
              <span class="icon">
                <FontAwesomeIcon icon={faGamepad} />
              </span>
              <span>Play</span>
            </button>
          </Link>
        </div>

      </section>
    </div>
  );
}
