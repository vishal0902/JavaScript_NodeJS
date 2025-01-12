//function borrowing examples

// const name = {
//     firstName: "vishal",
//     lastName: "Srivastava",
//     printDetails: function () {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// name.printDetails()

// const name1 = {
//     firstName: "Amit",
//     lastName : "sana"
// }

// name.printDetails.call(name1)

const name = {
    firstName: "vishal",
    lastName: "Srivastava",
}

function printDetails (hometown) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown)
}
// printDetails.call(name,"agra")

const name1 = {
    firstName: "Amit",
    lastName : "sana"
}

// printDetails.call(name1,"allahabad")
// printDetails.apply(name1,['allahabad'])


const print = printDetails.bind(name1,'allahabad')
// console.log(print)
console.log(print())
// console.log('hello')