import React from 'react'

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1>All Expenses</h1>

      {expenses.map((exp,index)=>(
        <div>
            <span>{exp.title}</span> - RS{exp.amount}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList