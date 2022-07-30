// Exercises: Level 3
// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
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
// 2. Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [{
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [{
                userId: 'fg12cy',
                rate: 5
            },
            {
                userId: 'zwf8md',
                rate: 4.5
            }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{
            userId: 'fg12cy',
            rate: 5
        }],
        likes: ['fg12cy']
    }
]
// Imagine you are getting the above users collection from a MongoDB database.
// a.Create a function called signUp which allows user to add to the collection.If user exists, inform the user that he has already an account.
function generateId() {
    let numArr = [...Array(10).keys()]
    let charArr = [...Array(6).keys()].map(i => String.fromCharCode(i + 65))
    let arr = numArr.concat(charArr)
    let randomHexaNumberArr = ['#']
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * 16)
        randomHexaNumberArr.push(arr[random])
    }
    return randomHexaNumberArr.join('')
}

function getDate() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let days = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    if (month < 10) {
        month = `0${month}`
    }
    if (days < 10) {
        days = `0${days}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    console.log(hours)
    if (hours >= 12) {
        amOrPm = 'PM'
        hours -= 12
    } else {
        amOrPm = 'Am'
    }
    return `${month}/${days}/${year} ${hours}:${minutes} ${amOrPm}`

}

function signUp(username, email, password, isLoggedIn) {
    let userNameArr = users.map((i) => {
        return i.username
    })
    console.log(userNameArr)
    if (userNameArr.includes(username)) {
        return `the user ${username} has already exists`
    } else {
        let userObj = {
            _id: generateId(),
            username: username,
            email: email,
            password: password,
            createdAt: getDate(),
            isLoggedIn: isLoggedIn
        }
        users.push(userObj)
    }
    return users
}
console.log(signUp('harveyy', 'Alex@email.com', '123', true))
// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
    let userObj = users.find(item => item.username == username)
    if (!userObj) {
        return 'user not exists'
    }
    if (userObj.password == password) {
        return 'login succes'
    } else {
        return 'wrong password'
    }
}
console.log(signIn('Sswef', '123'))
console.log(signIn('Alex', '123'))
console.log(signIn('Alex', '123123'))
// 3. The products array has three elements and each of them has six properties. 
// a.Create a function called rateProduct which rates the product

// b.Create a function called averageRating which calculate the average rating of a product


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.