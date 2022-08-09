// Exercises: Level 3
// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount() {
    firstname = firstname
    lastname = lastname
    incomes = incomes
    expenses = expenses

    function totalIncome() {
        return incomes
    }

    function totalExpense() {
        return expenses
    }

    function accountInfo() {
        return incomes - expenses
    }

    function addIncome(income) {
        return incomes += income
    }

    function addExpense(expenses) {
        return expenses += expenses
    }

    function accountBalance() {
        return totalIncome() - totalExpense()
    }

    return {
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountInfo: accountInfo(),
        addIncome: addIncome(),
        addExpense: addExpense(),
        accountBalance: accountBalance(),
    }
}