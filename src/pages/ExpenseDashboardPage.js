import React from 'react';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseListFilters from './ExpenseList/ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList />
    <ExpenseListFilters />
  </div>

);

export default ExpenseDashboardPage;
