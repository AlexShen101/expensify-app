import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../redux/filters/FilterActions';

const ExpenseListFilters = (props) => {

    const [calendarFocused, setCalendarFocused] = useState(null);

    const onDatesChange = ({ startDate, endDate }) => {

        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    }

    return (
        <div>
            <input
                type='text'
                value={props.filters.text}
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }} />
            <select
                id='select'
                defaultValue='date'
                onChange={(e) => {
                    if (e.target.value === 'date') {
                        props.dispatch(sortByDate());
                    }
                    else if (e.target.value === 'amount') {
                        props.dispatch(sortByAmount());
                    }
                    else {
                        console.log('check for an error in ExpenseListFilters');
                    }
                }}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
                startDate={props.filters.startDate}
                startDateId={'startDateId'}
                endDate={props.filters.endDate}
                endDateId={'endDateId'}
                onDatesChange={onDatesChange}
                focusedInput={calendarFocused}
                onFocusChange={(focused) => setCalendarFocused(focused)}
                numberOfMonths={1}
                isOutsideRange={(day) => false}
                showClearDates={true}
            />
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);