import { createStore, combineReducers } from 'redux';

import expensesReducer from './expenses/ExpensesReducer';
import filtersReducer from './filters/FiltersReducer';

const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log(store.getState());
})

const demoState = {
    expenses: [{
        id: '1',
        description: 'first expense',
        note: '? What are notes for?',
        amount: 10,
        createdAt: 0
    }],
    filters: {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
};

export default store;
