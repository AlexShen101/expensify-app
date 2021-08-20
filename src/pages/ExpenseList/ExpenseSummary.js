import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '@Redux/GetVisibleExpenses';

const ExpenseSummary = (props) => {

    let numberOfExpenses = props.visibleExpenses.length

    let ExpensesTotal = props.visibleExpenses.reduce(((total, expense) => {
        return total + (expense.amount / 100)
    }), 0)


    return (
        <div>
            <h3>Your Expense Summary:</h3>
            <p>Your have {numberOfExpenses} expense{numberOfExpenses === 1 ? '' : 's'}.</p>
            <p>The total amount for your expenses is: {numeral(ExpensesTotal).format('$0,0.00')}.</p>
        </div>

    )
}

const mapStateToProps = (state) => (
    {
        visibleExpenses: getVisibleExpenses(state.expenses, state.filters)
    }
)

export default connect(mapStateToProps)(ExpenseSummary);
