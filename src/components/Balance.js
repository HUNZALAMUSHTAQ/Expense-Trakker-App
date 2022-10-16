import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
    const transaction = useContext(GlobalContext).transactions
    const total = transaction.reduce((acc,curr)=> (acc+=curr.amount),0)
    console.log(total);
    return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
