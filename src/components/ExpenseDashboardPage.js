import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilters";

const Dashboard = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);
export default Dashboard;
