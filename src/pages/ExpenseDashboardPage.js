import React from 'react';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseListFilters from './ExpenseList/ExpenseListFilters';
import ExpensesSummary from './ExpenseList/ExpenseSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
