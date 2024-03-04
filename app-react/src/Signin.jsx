import { useState } from "react"


export const Signin = ({ signin }) => {

    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [passwordConfirmOk, setPasswordConfirmOk] = useState("true")

    const checkPasswords = () => {
        if (password == passwordConfirmation) {
            setPasswordConfirmOk(true)
        } else {
            setPasswordConfirmOk(false)
        }
    }

    const handlePasswordChange = e => {
        setPassword(e.value)
    }
    
    const handlePasswordConfirmationChange = e => {
        setPasswordConfirmation(e.value)
    }

    return (
        <form>
            <label htmlFor="username">nom d'utilisateur :</label>
            <input id="username" />
            <label htmlFor="email">adresse email :</label>
            <input id="email" />
            <label htmlFor="password">mot de passe :</label>
            <input type="password" id="password" onChange={ handlePasswordChange } onBlur={ checkPasswords }/>
            <label htmlFor="confirm-password">confirmer le mot de passe :</label>
            <input type="password" id="confirm-password"  onChange={ handlePasswordConfirmationChange } onBlur={ checkPasswords }/>
            {passwordConfirmOk ? "" : (<label style={{ color: "red"}}>les mots de passe ne correspondent pas</label>)}
            <button onClick={ () => signin() }>créer un compte</button>
        </form>

    )
}
