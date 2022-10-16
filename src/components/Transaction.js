import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
    const operator = transaction.amount < 0 ?'-' : '+'  
    const dispatch = useContext(GlobalContext).dispatch

    return (
        <>
            <li className={operator == '-'  ? 'minus' : 'plus'}>
                {transaction.text} <span>{operator}${Math.abs(transaction.amount)}</span><button  onClick={()=>dispatch({type:'DELETE_TRANSACTION', payload: {id: transaction.id}} )} className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transaction
