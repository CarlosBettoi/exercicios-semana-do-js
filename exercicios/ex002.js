/*const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numberLessThan501 = crazyNumbers.reduce ((accumulator, crazyNumber) => {
    if (crazyNumber < 501) {
        accumulator += 1
    }
return accumulator

}, 0)

console.log(numberLessThan501)   */ 


const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const countNumbersLessThan501 = (accumulator, crazyNumber) => 
  crazyNumber < 501 ? ++accumulator : accumulator


const numberLessThan501 = crazyNumbers.reduce (countNumbersLessThan501, 0)

console.log(numberLessThan501)    