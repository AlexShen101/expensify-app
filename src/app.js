import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import store from './redux/store';

import { startSetExpenses, setExpenses } from '@Redux/expenses/ExpenseActions';
import { login, logout } from './redux/auth/authActions';

import { firebase } from './firebase/firebase';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('user is logged in')
        store.dispatch(login(user.uid))

        //fetch expenses (currently all expenses)
        store.dispatch(startSetExpenses())
            .then(() => {
                renderApp()
            })

    } else {
        console.log('user is not logged in')
        store.dispatch(logout())

        renderApp()
        history.push('/')
    }
})