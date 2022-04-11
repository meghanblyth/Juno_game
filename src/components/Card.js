export const Card = (props) => {
  return (
    <div className="Cards">
      <img src={`Assets/${props.colour}_${props.number}.png`} 
      className={`${props.colour}_${props.number}`} 
      alt="" 
      onClick={() => props.playerHandleCardClick(props.colour, props.number, props.i)}/>
    </div>
  );
};
