export const Signup = ({ signup }) => {
    return (
        <form>
            <label htmlFor="username">nom d'utilisateur :</label>
            <input id="username" />
            <label htmlFor="password">mot de passe :</label>
            <input type="password" id="password" />
            <button onClick={ () => signup() }>se connecter</button>
        </form>
    )
}
