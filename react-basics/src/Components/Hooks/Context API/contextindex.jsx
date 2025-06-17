//TO CREATE CONTEXT API - We need to create a context and then a provider
//While it also has the consumer who will use the API
//Helps to Solve Props Drilling

import { createContext, useContext } from "react";

export const Datacontext = createContext();

export const DataProvider = ({children}) =>{ //Creating provider where we have passed an object as props
    const name  = "Archer"
    const age = 21

    console.log(children)
    return (
        <>
        <Datacontext.Provider value={{name:name,age:age}}>{children}</Datacontext.Provider>
        </>
    )
}

export const useDataContext = () =>{
    const context = useContext();

    return context;
}
