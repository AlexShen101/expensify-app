import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '@Redux/GetVisibleExpenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.visibleExpenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.visibleExpenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    visibleExpenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
