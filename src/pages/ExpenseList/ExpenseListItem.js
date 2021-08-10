import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, id, createdAt }) => {

    let date = createdAt.format('MM/DD/YYYY');

    return (
        <div>
            <p>{`${description}: $${amount}`}</p>
            <p>Created At: {date}</p>
            <button><Link to={`/edit/${id}`}>Edit</Link></button>
        </div>
    )
}

export default ExpenseListItem;