import { Card } from './Card';

export const PlayerHand = (props) => {


  const playerHand = props.playerHand.map(
    ({ colour, number }, i) => <div className="is-pulled-left"> {
      <Card colour={colour} number={number} onClick={props.onCardClick} i={i} />
    } </div>
  )

  return (playerHand)


}