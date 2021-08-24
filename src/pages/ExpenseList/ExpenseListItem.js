import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => {

  return (
    <div className="box-layout__container">
      <Link to={`/edit/${id}`} className="expense-list-item__link">
        <div className="expense-list-item">
          <div className="expense-list-item__info">
            <h3>{description}</h3>
            <p> {`${moment(createdAt).format('MM/DD/YYYY')}`} </p>
          </div>
          <div className="expense-list-item__amount">
            <p>{`${numeral(amount / 100).format('$0,0.00')}`}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ExpenseListItem;
