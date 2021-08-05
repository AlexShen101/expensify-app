import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {

  return (
    <div>
      <ExpenseForm {...props} />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  let expense = state.expenses.find((expense) => expense.id === props.match.params.id)

  if (expense == undefined) {
    props.history.push('/');
    return {};
  }
  else {
    return {
      expense: {
        expenseDescription: expense.description,
        expenseAmount: expense.amount,
        id: expense.id,
        expenseNote: expense.note,
        expenseCreatedAt: expense.createdAt
      }

    }
  }
}

export default connect(mapStateToProps)(EditExpensePage);
