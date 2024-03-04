import { useEffect } from "react"

export const Message = ({ title, author, text, date }) => {
    return (
        <article className="message">
            <h3>{ title }</h3>
            <small>Par { author }</small><br />
            <small>Le { date.toLocaleDateString() }</small>
            <hr />
            <p> { text } </p>
            <button>répondre</button>
        </article>
    )
}
