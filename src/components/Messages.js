export const Messages = (props) => {

  const messages = props.messages.map(
    (message) =>
      <div className="message">
        <p class="is-size-5">
          {message}
        </p>
      </div>


  )

  return (messages)

}