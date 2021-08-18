import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import expensesReducer from './expenses/ExpensesReducer'
import filtersReducer from './filters/FiltersReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    composeEnhancers(applyMiddleware(thunk))
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
