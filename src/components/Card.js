export const Card = () => {
  
  return ( 
    <div className="Cards">
      <img src="Assets/Blue_0.png" className="blue card" alt="" />
      <img src="Assets/Green_0.png" className="green card" alt="" />
      <img src="Assets/Red_0.png" className="red card" alt="" />
      <img src="Assets/Yellow_0.png" className="yellow card" alt="" />
    </div>
   );
}



// <button id='card'>Colour = {props.colour}, Number = {props.number}</button>

// Something like below for assigning images to cards?

{/* <p className='playerDeckText'>Player 1</p>
  {player1Hand.map((item, i) => (
    <img
        key={i}
        className='Card'
        onClick={() => handleDrawCard(item)}
        src={require(`../Assets/${item}.png`).default}
     /> */}
