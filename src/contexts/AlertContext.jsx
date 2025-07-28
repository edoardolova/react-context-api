import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({children}){
    const [alert, setAlert] = useState({
        title: 'qualcosa è andato storto',
        errorMessage: null
    });
    return(
        <AlertContext.Provider value={{alert, setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

function useAlert(){
    const context = useContext(AlertContext);
    return context;
}

export {AlertProvider, useAlert}