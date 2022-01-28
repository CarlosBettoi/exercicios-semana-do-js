const cart = [
    { name: 'Dark Souls III', price: 95.03 },
    { name: 'Shadow of the Tomb Raider', price: 101.19 },
    { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
    { name: 'Resident Evil 2', price: 119.90 },
    { name: 'Death Stranding', price: 149.99 }
  ]

/*
A linha do código estava assim:

const productList = cart.reduce ((accumulator, product) => `${accumulator}-${product.name} \n`, '')

Podemo remover a sintaxe objeto.propriedade, usando o distructing assignment

*/




const productList = cart.reduce ((accumulator, {name}) => `${accumulator}-${name} \n`, '')

console.log(productList)




