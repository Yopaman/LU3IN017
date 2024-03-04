export const CreateMessage = () => {
    return (
        <div className="new-message">
            <textarea
                name="message"
                placeholder="Écrivez un nouveau message ici..."
                aria-label="New forum message"
            >
            </textarea>
            <button>Envoyer</button>
        </div>
    )
}
