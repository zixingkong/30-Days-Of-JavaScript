// Exercises: Level 3
// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
let personAccount = {
    firstName: 'kevin',
    lastName: 'bob',
    income: 1000,
    expenses: 200,
    totalIncome: function () {
        return this.income
    },
    totalExpense: function () {
        return this.expenses
    },
    accountInfo: function () {
        return this.income - this.expenses
    },
    addIncome: function (income) {
        return this.income + income
    },
    addExpense: function (expenses) {
        return this.expenses + expenses
    },
    accountBalance: function () {
        return this.totalIncome - this.totalExpense
    }
}