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
