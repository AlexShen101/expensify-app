import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../redux/filters/FilterActions';


const ExpenseListFilters = (props) => {
  let [calendarFocused, setCalendarFocused] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  }

  const onFocusChange = (calendarFocused) => {
    //here maybe (use arrow function instead of direct value)
    setCalendarFocused(calendarFocused)
  }

  const onTextChange = (e) => {
    props.setTextFilter(e.target.value);
  }

  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      props.sortByDate();
    } else if (e.target.value === 'amount') {
      props.sortByAmount();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={onTextChange}
      />
      <select
        value={props.filters.sortBy}
        onChange={onSortChange}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={props.filters.startDate}
        startDateId='startDateId'
        endDate={props.filters.endDate}
        endDateId='endDateId'
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );

}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
