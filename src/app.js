import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { Provider } from 'react-redux';
import store from './redux/store';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
