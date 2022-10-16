import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
    const [message, setmessage] = useState('')
    const [amount, setamount] = useState(0)
    const dispatch = useContext(GlobalContext).dispatch

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(message, amount);
        dispatch({type: 'ADD_TRANSACTION' , payload: {text:message, amount: amount}});
        setamount(0)
        setmessage('')
    }

  return (
    <>
       <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label  htmlFor="text">Text</label>

          <input type="text" value={message} onChange={ (e)=> setmessage(e.target.value) } placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>

          <input type="number" value={amount}  onChange={ (e)=> setamount(e.target.value) }  placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>

    </>
  )
}

export default AddTransaction
