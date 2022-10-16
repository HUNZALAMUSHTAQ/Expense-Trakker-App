import React, {createContext, useReducer} from "react";

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return ({...state, transactions: [...state.transactions, getTransaction(action.payload) ]})
        case 'DELETE_TRANSACTION':
            return {transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)}
        default:
            return state;
    }
} 

const getTransaction = (payload) =>{
        const {text, amount} = payload
        return {id: Math.floor(Math.random() * 100) + 1, text: text, amount: Number(amount) }
}

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<GlobalContext.Provider value={{
        transactions: state.transactions, dispatch: dispatch
    }}>
        {children} 
    </GlobalContext.Provider>)
}