import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../redux/expenses/ExpenseActions';

const EditExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.startEditExpense(props.expense.id, expense);
    props.history.push('/');
  }

  const onRemove = () => {
    props.startRemoveExpense(props.expense.id);
    props.history.push('/');
  }

  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={onSubmit}
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
