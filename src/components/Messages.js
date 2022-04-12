export const Messages = (props) => {

  const messages = props.messages.map(
    (message) => 
   <p>
     {message}
   </p>
  )

  return (messages)

}