import React, { createContext, useContext, useReducer } from "react"


//preparing data leayder
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Hook which allows use to pull information from data leyaer
export const useStateValue = () => useContext(StateContext) 