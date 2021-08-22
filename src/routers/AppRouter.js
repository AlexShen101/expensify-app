import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'

import ExpenseDashboardPage from '@Pages/ExpenseDashboardPage';
import AddExpensePage from '@Pages/AddExpensePage';
import EditExpensePage from '@Pages/EditExpensePage';
import NotFoundPage from '@Pages/NotFoundPage';
import LoginPage from '@Pages/LoginPage';

import Header from '@Components/Header';

export const history = createBrowserHistory();

const AppRouter = () => {

  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
