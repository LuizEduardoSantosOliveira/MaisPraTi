import {createContext, useState} from 'react'

const AuthContext = createContext()

export function AuthProvider(){
    const[isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }
}