import moment from 'moment';

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'FILTER_STARTDATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'FILTER_ENDDATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

export default filtersReducer;