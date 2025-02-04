import React, { ReactNode, useContext, useState } from 'react'
import {AuthContext} from '../Context/Context'

interface ViewReact{
    children: ReactNode
  }
export  function ProviderAuth(props:ViewReact) {

    const [user, setUser] = useState("");

    const login = () => setUser("Juan");
    const logout = () => setUser("");


  return (
    
    <AuthContext.Provider value={{user,login,logout}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}
