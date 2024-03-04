import { Logout } from "./Logout"


export const NavigationPanel = ({ logout, isConnected, setCurrentPage }) => {
    return (
        <nav className="container">
            <ul>
                <li><h1>LOGO</h1></li>
            </ul>
            {
                isConnected ?
                    (<ul><li><Logout logout={logout} /></li></ul>) :
                    (
                        <ul>
                            <li><button onClick={ () => setCurrentPage("signup") }>se connecter</button></li>
                            <li><button onClick={ () => setCurrentPage("signin") }>créer un compte</button></li>
                        </ul>
                    )
            }
        </nav>
    )
}
