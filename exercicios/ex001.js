const randomNumbers = [10, 30, 15, 25, 50, 40, 5]


//const numerosprimos = randomNumbers.filter (randomNumber => randomNumber % 2 === 1)

const getOddNumbers = randomNumber => randomNumber % 2 === 1

const numerosprimos = randomNumbers.filter (getOddNumbers)


console.log(numerosprimos)
   
   
   
   