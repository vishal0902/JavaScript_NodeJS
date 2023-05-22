const name = {
    firstName: "vishal",
    lastName: "Srivastava",
    printDetails: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}

name.printDetails()

const name1 = {
    firstName: "Amit",
    lastName : "sana"
}

name.printDetails.call(name1)