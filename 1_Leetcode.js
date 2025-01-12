var createCounter = (num) => {
    return () => {
        console.log(num++)
    }
}

const counter = createCounter(10)
counter()
counter()