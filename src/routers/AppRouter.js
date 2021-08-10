import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import ExpenseDashboardPage from '@Pages/ExpenseDashboardPage';
import AddExpensePage from '@Pages/AddExpensePage';
import EditExpensePage from '@Pages/EditExpensePage';
import NotFoundPage from '@Pages/NotFoundPage';

import Header from '@Components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
