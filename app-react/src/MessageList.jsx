import { Message } from "./Message"

export const MessageList = ({ messages }) => {
    const messagesElements = messages.map(({title, author, text, date}) =>
        <Message title={title} author={author} text={text} date={date} />
    ) 

    return (
        <div className="messages-list">
        { messagesElements }
        </div>
    )
}
