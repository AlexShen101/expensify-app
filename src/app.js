import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import store from './redux/store';

import { startSetExpenses } from '@Redux/expenses/ExpenseActions';

import './firebase/firebase';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


store.dispatch(startSetExpenses())
    .then(() => {
        ReactDOM.render(jsx, document.getElementById('app'));
    })

