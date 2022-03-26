import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const ExpenseForm = (props) => {

  let [description, setDescription] = useState(props.expense ? props.expense.description : '')
  let [note, setNote] = useState(props.expense ? props.expense.note : '')
  let [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100).toString() : '')
  let [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment())
  let [id] = useState(props.expense ? props.expense.id : '')
  let [calendarFocused, setCalendarFocused] = useState(false)
  let [error, setError] = useState('')

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description)
  }

  const onNoteChange = (e) => {
    const note = e.target.value;
    setNote(note)
  }

  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount)
    }
  }

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setCreatedAt(createdAt)
    }
  }

  const onFocusChange = ({ focused }) => {
    setCalendarFocused(focused)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setError('Please provide a description and amount')
    } else {
      setError('')

      props.onSubmit({
        description,
        amount: parseInt(amount * 100),
        createdAt: createdAt.valueOf(),
        note,
      })
    }
  }


  return (
    <form onSubmit={onSubmit} className="expense-form">
      {error && <p className="expense-form__error">{error}</p>}
      <input
        type="text"
        placeholder="Description"
        autoFocus
        value={description}
        onChange={onDescriptionChange}
        className="text-input"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={onAmountChange}
        className="text-input"
      />
      <SingleDatePicker
        date={createdAt}
        onDateChange={onDateChange}
        focused={calendarFocused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      <br></br>
      <textarea
        placeholder="Add a note for your expense (optional)"
        value={note}
        onChange={onNoteChange}
        className="textarea"
      >
      </textarea>
      <button className="btn btn__submit">{id === '' ? 'Add Expense' : 'Edit Expense'}</button>
    </form>
  )
}

export default ExpenseForm