import React from 'react'

const Dashboard = ({ expenses }) => {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <h3>Totol Expenses : {expenses.length}</h3>
    </div>
  );
};

export default Dashboard
