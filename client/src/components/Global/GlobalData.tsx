import React, { createContext, PropsWithChildren, useState } from "react";


interface userProps {
  userData : null;
  setUserData :  React.Dispatch<React.SetStateAction<null>>
}

export const GlobalContext = createContext<userProps | null>(null)


export const MainContext:React.FC<PropsWithChildren> = ({children}) =>{
const [userData  , setUserData] = useState(null)


return (
  <GlobalContext.Provider value={{
    
    userData,
    setUserData
  }}>
    {children}
  </GlobalContext.Provider>
)
}