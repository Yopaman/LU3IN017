import { CreateMessage } from "./CreateMessage"
import { MessageList } from "./MessageList"

export const Forum = () => {
    const messages = [
        { title: "titre1", author: "auteur1", text: "texte1", date: new Date() },
        { title: "titre2", author: "auteur2", text: "texte2", date: new Date() },
        { title: "titre3", author: "auteur3", text: "texte3", date: new Date() },
    ]

    return (
        <div class="forum">
            <section>
                <CreateMessage />
            </section>

            <section>
                <MessageList messages={messages} />
            </section>
        </div>
    )
}
