import { Card } from './Card';

export const ComputerHand = (props) => {

  const computerHand = props.computerHand.map(
    ({ colour, number }, i) => 
    <div className="is-pulled-right"> 
      {
        <Card colour="back" number="back" onClick={() => { }} i={i} />
      } 
    </div>
  )

  return (computerHand)

}