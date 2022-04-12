export const drawCard = () => {

  const number = Math.floor(Math.random() * 10);
  const colourChoices = ['Red', 'Green', 'Yellow', 'Blue'];
  const colour = colourChoices[Math.floor(Math.random() * colourChoices.length)];

  const randomCard = {
    colour: colour,
    number: number
  };

  return (
    randomCard
  );

}

export const drawStarterHand = () => {

  // Make array of 7 cards
  const cards = [];

  for(let i = 0; i < 7; i++){
    cards.push(drawCard());
  }
  
  // Return array of cards
  return cards
}
