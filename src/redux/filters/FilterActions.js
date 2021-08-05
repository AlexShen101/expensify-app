export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };

const setTextFilter = (text) => ({
    type: 'FILTER_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'FILTER_STARTDATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'FILTER_ENDDATE',
    endDate
});

