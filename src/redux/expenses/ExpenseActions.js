import { v1 as uuid } from 'uuid';
export { addExpense, editExpense, removeExpense };

/*
adds an expense to the expense array in store
requires the details of the expense that will be added (amount and description)
creates a type for the action, which lets the object returned be identified by expensesReducer
passes in a new expense object to be added to the expense array (expensesReducer's state)
*/
const addExpense = (
    {
        description,
        note = '',
        amount,
        createdAt = 0
    }
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        amount,
        note,
        createdAt
    }
});

/*
attempts to edit an expense in the expense array of the Redux store state
returns an 'action object' with properties: type, id, updates
*/
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

