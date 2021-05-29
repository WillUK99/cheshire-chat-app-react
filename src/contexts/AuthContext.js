import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth } from "../firebase"

// creating context
const AuthContext = React.createContext()

// creating function w=to use later to grab context
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    // setting user and loader states
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        // getting user from firebase auth
        auth.onAuthStateChanged((user) => {
            // setting user from firebase auth to state
            setUser(user)
            setLoading(false)
            //using react-router-dom to redirect to new page
            history.push("/chats")
        })
    }, [user, history]);

    const value = { user }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}