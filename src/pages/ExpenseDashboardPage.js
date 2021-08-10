import React from 'react';
import ExpenseSummary from './ExpenseList/ExpenseSummary';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseListFilters from './ExpenseList/ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseList />
    <ExpenseListFilters />
  </div>

);

export default ExpenseDashboardPage;
