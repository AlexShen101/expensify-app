const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    let filteredExpenses = expenses.filter((expense) => {
        const startDateMatch = startDate ? expense.createdAt.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? expense.createdAt.isSameOrBefore(endDate, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });

    //sort will keep the order if -1 is returned and swap if 1 is returned
    let sortedExpenses = filteredExpenses.sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt.isBefore(b.createdAt) ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
    });

    return sortedExpenses;
};

export default getVisibleExpenses;