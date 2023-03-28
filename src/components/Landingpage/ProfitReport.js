import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfitReport.css";

const ProfitReport = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalSales, setTotalSales] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  const fetchData = async () => {
    const result = await axios.get("/api/profitReport");
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let sales = 0;
    let expenses = 0;

    data.forEach((item) => {
      const date = new Date(item.date);
      if (
        date >= new Date(startDate) &&
        date <= new Date(endDate) &&
        item.sales &&
        item.expenses
      ) {
        sales += item.sales;
        expenses += item.expenses;
      }
    });

    setTotalSales(sales);
    setTotalExpenses(expenses);
    setTotalProfit(sales - expenses);
  }, [data, startDate, endDate]);

  return (
    <div className="start">
      <h1>Profit Report</h1>
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div className="card-container">
        <div className="card sales">
          <h2>Total Sales</h2>
          <p>${totalSales.toFixed(2)}</p>
        </div>
        <div className="card expenses">
          <h2>Total Expenses</h2>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="card profit">
          <h2>Total Profit</h2>
          <p>${totalProfit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitReport;
