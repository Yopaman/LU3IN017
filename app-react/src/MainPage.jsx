import { useState } from "react"
import { NavigationPanel } from "./NavigationPanel.jsx"
import { Signin } from "./Signin.jsx"
import { Signup } from "./Signup.jsx"
import { Forum } from "./Forum.jsx"

export const MainPage = () => {
    const [currentPage, setCurrentPage] = useState("signin")
    const [isConnected, setIsConnected] = useState(false)

    const setConnected = () => {
        setIsConnected(true)
    }

    const setLogout = () => {
        setCurrentPage("signup")
        setIsConnected(false)
    }

    const signIn = () => {
        setCurrentPage("homepage")
        setIsConnected(true)
    }

    const signUp = () => {
        setCurrentPage("homepage")
        setIsConnected(true)
    }

    const getMainComponent = () => {
        switch (currentPage) {
            case "signin":
                return <Signin signin={ signIn } />
            case "signup":
                return <Signup signup={ signUp } />
            case "homepage":
                return <Forum />
            default:
                return "??? erreur"
        }
    }

    return (
        <>
            <NavigationPanel login={ setConnected } logout={ setLogout } isConnected={ isConnected } setCurrentPage={ setCurrentPage } />

            <main class="container">{ getMainComponent() }</main>
        </>
    )
}
