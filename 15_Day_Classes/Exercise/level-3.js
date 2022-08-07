// Exercises Level 3
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// this.sample = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class Statistics {
    constructor(sample) {
        this.sample = sample
    }

    count() {
        return this.sample.length
    }

    sum() {
        return this.sample.reduce((acc, cur) => acc + cur, 0)
    }

    min() {
        return Math.min.apply(null, this.sample)
    }

    max() {
        return Math.max.apply(null, this.sample)
    }

    range() {
        return this.max() - this.min()
    }

    mean() {
        return (this.sum() / this.count()).toFixed()
    }

    median() {
        this.sample.sort()
        if (this.sample.length % 2 === 0) {
            return (this.sample[this.sample.length / 1] + this.sample[this.sample.length / 2 + 1]) / 2
        } else {
            return this.sample[Math.floor(this.sample.length / 2)]
        }
    }

    mode() {
        let countAge = this.sample.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1
            return acc
        }, {})
        let modeArr = []
        Object.entries(countAge).forEach((elem) => {
            modeArr.push({
                mode: elem[0],
                count: elem[1]
            })
        })
        modeArr.sort((a, b) => b.count - a.count)
        return modeArr[0]
    }

    variance() {
        let meanAge = this.mean()
        let powSum = this.sample.reduce((acc, cur) => {
            acc = acc + Math.pow((cur - meanAge), 2)
            return acc
        }, 0)
        return (powSum / this.count()).toFixed(1)
    }

    std() {
        return (Math.sqrt(this.variance())).toFixed(1)
    }
    // Count: 25
    // Sum:  744
    // Min:  24
    // Max:  38
    // Range:  14
    // Mean:  30
    // Median:  29
    // Mode:  (26, 5)
    // Variance:  17.5
    // Standard Deviation:  4.2
    describe() {
        let description = 'Count: ' + this.count() + '\n' +
            'Sum: ' + this.sum() + '\n' +
            'Min: ' + this.min() + '\n' +
            'Max: ' + this.min() + '\n' +
            'Range: ' + this.range() + '\n' +
            'Mean: ' + this.mean() + '\n' +
            'Median: ' + this.median() + '\n' +
            'Mode: ' + this.mode() + '\n' +
            'Variance: ' + this.variance() + '\n'
        return description
    }

}

const sampleNumArr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics(sampleNumArr)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.variance()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2

console.log(statistics.describe())
// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses
    }

    totalIncome() {
        return this.incomes
    }
    totalExpense() {
        return this.expenses
    }
    accountInfo() {
        return this.incomes - this.expenses
    }
    addIncome(income) {
        return this.incomes += income
    }
    addExpense(expenses) {
        return this.expenses += expenses
    }
    accountBalance() {
        return this.totalIncome() - this.totalExpense()
    }
}


let personAccount = new PersonAccount('kevin', 'bob', 1000, 200)
console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
personAccount.addIncome(1200)
console.log(personAccount.totalIncome())
personAccount.addExpense(500)
console.log(personAccount.totalIncome())
console.log(personAccount.accountBalance())