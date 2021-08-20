import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../redux/expenses/ExpenseActions';

const AddExpensePage = (props) => {

  const onSubmit = (expense) => {
    props.startAddExpense(expense);
    props.history.push('/');
  }

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={onSubmit}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  })
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
