import React, { useContext, useState }from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = ({ transaction }) => {
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text,
      amount:+amount
    }

    addTransaction(newTransaction);
  }

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <div>
    <h3>Add new transaction</h3>

       <form onSubmit={onSubmit}>

        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br></br>(negative - expense, positve - income)
          </label>
          <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
          />
        </div>
 
        <button className="btn">Add transaction</button>

      </form> 

  </div>
  );
}
