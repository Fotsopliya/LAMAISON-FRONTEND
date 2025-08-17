import { createContext, useEffect, useState, type ReactNode } from "react";


type PageProps = {
    children: ReactNode 


}
export const AuthContext=createContext({})

export const AuthContextProvider= ({children}: PageProps) => {

    const[user,setUser]= useState(
        JSON.parse(localStorage.getItem("user")?.toString() ?? "{}") || null
    )

    const UpdateUser = (data: any) => {
        setUser(data)
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])
    return(
        <AuthContext.Provider value={{user,UpdateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

