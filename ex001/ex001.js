const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const numerosprimos = randomNumbers.filter ((number) => {
    if (number % 2 === 0) {
        return console.log('só há pares')
    }
    return number
} )