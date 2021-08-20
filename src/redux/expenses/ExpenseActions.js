import database from '../../firebase/firebase'
export { startAddExpense, startEditExpense, startRemoveExpense, startSetExpenses };


/*
adds an expense to the expense array in store
requires the details of the expense that will be added (amount and description)
creates a type for the action, which lets the object returned be identified by expensesReducer
passes in a new expense object to be added to the expense array (expensesReducer's state)
*/
const addExpense = (expense) => {
    return ({
        type: 'ADD_EXPENSE',
        expense
    })
}

const startAddExpense = (expenseData) => {
    return (dispatch) => {

        let expense = expenseData

        database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    ...expense,
                    id: ref.key
                })
                )
            })
    }
}

/*
attempts to edit an expense in the expense array of the Redux store state
returns an 'action object' with properties: type, id, updates
*/
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const startEditExpense = (id, updates) => {

    return (dispatch) => {

        database.ref('expenses/' + id)
            .update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
            })
    }
}

const removeExpense = (id) => {

    return ({
        type: 'REMOVE_EXPENSE',
        id
    })
}

const startRemoveExpense = (id) => {

    return (dispatch) => {

        database.ref('expenses/' + id)
            .remove()
            .then(() => {
                dispatch(removeExpense(id));
            })
    }
}

const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
}

const startSetExpenses = () => {

    return (dispatch) => {

        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                let expensesArray = []

                snapshot.forEach((childSnapshot) => {
                    expensesArray.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                })

                console.log('\n\nExpenses recieved on startup:')
                console.log(expensesArray)

                dispatch(setExpenses(expensesArray))
            })
    }
}
