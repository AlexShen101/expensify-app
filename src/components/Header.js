import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { firebase } from '../firebase/firebase'

const Header = (props) => {

  const logOut = () => {
    firebase.auth().signOut();
  }

  return (
    <div className="header__bar">

      <h1>Expensify</h1>
      {props.loggedIn &&
        <div className="header__links">
          <NavLink to="/dashboard" className="header__link" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink to="/create" className="header_link" activeClassName="is-active">Create Expense</NavLink>
          <button className="btn__no-padding btn__logout" onClick={logOut}>Log out</button>
        </div>
      }
    </div>
  )
}

export default Header;
