import React, { useState } from 'react';

const FinancialInformation = ({ onNext, onBack }) => {
  const [annualProfit, setAnnualProfit] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [salesRevenue, setSalesRevenue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h3>Financial Information</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="annualProfit">Annual Profit</label>
        <input type="text" id="annualProfit" value={annualProfit} onChange={(e) => setAnnualProfit(e.target.value)}/>
        
        <label htmlFor="numEmployees">Num Employees</label>
        <input type="text" id="numEmployees" value={numEmployees} onChange={(e) => setNumEmployees(e.target.value)} />  
        
        <label htmlFor="monthlyExpenses">Monthly Expenses</label>
        <input type="text" id="monthlyExpenses" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} />  

        <label htmlFor="salesRevenue">Sales Revenue</label>
        <input type="text" id="salesRevenue" value={salesRevenue} onChange={(e) => setSalesRevenue(e.target.value)} />

<button type="submit">Next</button>
</form>
</div>
);
};

export default FinancialInformation;