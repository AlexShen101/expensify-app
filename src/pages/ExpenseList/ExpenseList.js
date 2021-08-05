import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../../redux/GetVisibleExpenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>The Expense List</h1>
            {getVisibleExpenses(props.expenses, props.filters).map((expense) => {
                return (
                    <ExpenseListItem key={expense.id} {...expense} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpenseList);