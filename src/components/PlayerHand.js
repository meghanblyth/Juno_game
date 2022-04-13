import { Card } from './Card';

export const PlayerHand = (props) => {
    
        const playerHand = props.playerHand.map(
          ({ colour, number }, i) => <li> {
            <Card colour={colour} number={number} onClick={props.onCardClick} i={i} />
          } </li>
        ) 
      
  return (playerHand)
      
}