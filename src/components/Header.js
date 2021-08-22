import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { firebase } from '../firebase/firebase'

const Header = (props) => {

  const logOut = () => {
    firebase.auth().signOut();
  }

  return (
    <header>
      <h1>Expensify</h1>
      {props.loggedIn &&
        <div>
          <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
          <button onClick={logOut}>Log out</button>
        </div>
      }
    </header>
  )
}

export default Header;
