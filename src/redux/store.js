import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import expensesReducer from './expenses/ExpensesReducer'
import filtersReducer from './filters/FiltersReducer'
import authReducer from './auth/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)

export default store;
