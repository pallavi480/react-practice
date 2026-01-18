import React, {useState} from 'react'

const AddExpenses = ({ expenses, setExpenses }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);


  const addExpense = ()=>{
   setExpenses([
    ...expenses,{title,amount}
   ])

   setTitle("")
   setAmount(0)
  }

  return (
    <div>
      <h1>Add Expense</h1>

      {/* <h2>{expenses.title}</h2>
      <h2>{expenses.amount}</h2> */}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>
    </div>
  );
};

export default AddExpenses
