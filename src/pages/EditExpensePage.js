import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../redux/expenses/ExpenseActions';

const EditExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.startEditExpense(props.expense.id, expense);
    props.history.push('/dashboard');
  }

  const onRemove = () => {
    props.startRemoveExpense(props.expense.id);
    props.history.push('/dashboard');
  }

  return (
    <div className="box-layout__container">
      <h1 className="page-title">Editing Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={onSubmit}
      />
      <button onClick={onRemove} className="btn__remove">Remove</button>
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
