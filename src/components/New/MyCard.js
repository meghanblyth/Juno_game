
export const MyCard = (props) =>{
    
    return (
        <>
                <button onClick={()=>props.whenclicked(props.myColour, props.myNumber, props.positionInList)} >   
                    CARD {props.myNumber} {props.myColour}  
                </button>

        </>
    )
}

// It passes the data (color and number) 
// and adds a button to the screen with the number and color