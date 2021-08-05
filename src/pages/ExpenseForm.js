import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addExpense, editExpense, removeExpense } from '../redux/expenses/ExpenseActions';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import moment from 'moment';


const ExpenseForm = (
    {
        dispatch,
        history,
        expense: {
            expenseDescription = '',
            expenseAmount = '',
            expenseNote = '',
            id = undefined,
            expenseCreatedAt = moment()
        } = {}
    }) => {

    const [description, setDescription] = useState(expenseDescription);
    const [amount, setAmount] = useState(expenseAmount);
    const [note, setNote] = useState(expenseNote);

    const [createdAt, setCreatedAt] = useState(expenseCreatedAt);
    const [calendarFocused, setCalendarFocused] = useState(false);

    const [error, setError] = useState('');

    const setExpenseAmount = (e) => {
        let amount = e.target.value;

        //if the changed amount = '' or amount is formatted properly, let the change in value occur
        if (!amount) {
            setAmount('');
        }
        else if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(parseInt(e.target.value));
        }
    }

    const submitExpense = (e) => {
        e.preventDefault();

        if (!description || !amount) {
            setError('You must add a description and amount!');
        }
        else {
            setError('');

            if (typeof id !== 'undefined') {
                let updates = { description, amount, note, createdAt };
                dispatch(editExpense(id, updates));
                history.push('/');
            }
            else {
                dispatch(addExpense({ description, amount, note, createdAt }));
                history.push('/');
            }
        }
    }

    return (
        <div>

            {error !== undefined && <p>{error}</p>}

            <form onSubmit={submitExpense}>
                <p>Description:</p>
                <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} autoFocus></input>

                <p>Amount: ($)</p>
                <input type='number' value={amount} onChange={setExpenseAmount} ></input>

                <SingleDatePicker
                    date={createdAt}
                    onDateChange={(date) => (date !== null && setCreatedAt(date))}
                    focused={calendarFocused}
                    onFocusChange={({ focused }) => setCalendarFocused(focused)}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />
                <p>Notes:</p>
                <textarea placeholder='Add a note for your expense (optional).' onChange={(e) => setNote(e.target.value)} value={note}></textarea>
                <button>{!id ? `Add Expense` : `Edit Expense`}</button>
            </form>

            {id &&
                <button onClick={() => {
                    history.push('/');
                    dispatch(removeExpense(id));
                }}>Remove</button>
            }
        </div>
    )
};

export default connect()(ExpenseForm);
