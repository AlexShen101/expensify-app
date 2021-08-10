import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../../redux/GetVisibleExpenses';

const ExpenseSummary = (props) => {

    let numberOfExpenses = getVisibleExpenses(props.expenses, props.filters).length

    let ExpensesTotal = props.expenses.length !== 0 ? getVisibleExpenses(props.expenses, props.filters).reduce(((total, expense) => total + expense.amount), 0) : 0;


    return (
        <div>
            <h3>Your Expense Summary:</h3>
            <p>Your have {numberOfExpenses} expense{numberOfExpenses === 1 ? '' : 's'}.</p>
            <p>The total amount for your expenses is: ${ExpensesTotal}.</p>
        </div>

    )
}

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpenseSummary);
