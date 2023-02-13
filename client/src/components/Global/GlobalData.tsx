import React, { createContext, PropsWithChildren, useState } from "react";

export interface user {
  name: string;
  email: string;
  _id : string
}


interface userProps {
  userData : user;
  setUserData :  React.Dispatch<React.SetStateAction<user>>
}

export const GlobalContext = createContext<userProps>({
  userData: {
    name: "",
    email: "",
    _id : ""
  },
  setUserData : (userData : {}) => {}
})


export const MainContext:React.FC<PropsWithChildren> = ({children}) =>{
const [userData  , setUserData] = useState<user>({} as user)

  React.useEffect(() => {
		if (window.localStorage.getItem("userData")) {
			const myData = JSON.parse(window.localStorage.getItem("userData") || "");
			setUserData(myData);
		}

		return;
	}, []);

return (
  <GlobalContext.Provider value={{
    
    userData,
    setUserData
  }}>
    {children}
  </GlobalContext.Provider>
)
}