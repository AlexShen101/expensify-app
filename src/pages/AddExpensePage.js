import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => {

  return (
    <div>
      <ExpenseForm {...props} />
    </div>
  )

};

export default connect()(AddExpensePage);
