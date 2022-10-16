import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const transactions = useContext(GlobalContext).transactions
    const Income = transactions.filter(transaction=> transaction.amount > 0).reduce((acc, val)=>(acc+=val.amount),0)
    const Expense = transactions.filter(transaction=> transaction.amount < 0).reduce((acc, val)=>(acc+=val.amount),0)
    
    console.log(Income, Expense);
    
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${Income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(Expense)}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses
