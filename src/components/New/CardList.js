import { MyCard } from "./MyCard";

export const CardList = (props) => {

    return(
        <div>
            {props.allcards.map(({colour,number}, i) =>     
            <MyCard key={Math.random()} myColour={colour} myNumber={number} positionInList={i} whenclicked={props.onclickevent}/>)}
        
        </div>
    )
};

// All the data is passed in via props, data being the CardList, 
// we loop through them and make a mycard component for each one
