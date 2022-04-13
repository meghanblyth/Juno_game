import './Card.css';

export const Card = (props) => {
  return (
    <figure className="juno-card box image is-128x128 is-3by4 ">
      <img src={`Assets/${props.colour}_${props.number}.png`} 
      
      className={`${props.colour}_${props.number}`} 

      alt="" 

      onClick={() => props.onClick(props.colour, props.number, props.i)}/>
    </figure>
  );
};
