import { createContext, useEffect, useState, type ReactNode } from "react";


type PageProps = {
    children: ReactNode 

}
type AuthContextProps={
    user: any,
    updateUser: (data: any) => void
}
export const AuthContext=createContext<AuthContextProps>({
    user: {},
    updateUser: () => {}
})
export const AuthContextProvider= ({children}: PageProps) => {

    const[user,setUser]= useState(
        JSON.parse(localStorage.getItem("user")?.toString() ?? "{}") || null
    )

    const updateUser = (data: any) => {
        setUser(data)
    }
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])
    return(
        <AuthContext.Provider value={{user,updateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

