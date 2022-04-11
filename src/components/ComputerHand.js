import { Card } from './Card';

export const ComputerHand = (props) => {
    
        const computerHand = props.computerHand.map(
          ({ colour, number }, i) => <li> {
            <Card colour="back" number="back" onClick={() => {}} i={i}  />
          } </li>
        ) 
      
  return ( computerHand)
      
}