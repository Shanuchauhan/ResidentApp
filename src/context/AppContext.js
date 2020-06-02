import React ,{useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = function({children}){

    const [address,setAddress] = useState("")
    
    return <AppContext.Provider value={{address ,setAddress}}>
	{children}
	</AppContext.Provider>

}

export default AppContext