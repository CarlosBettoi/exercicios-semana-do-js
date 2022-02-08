/* Se temos um array de produtos e queremos obter um novo array com os mesmos produtos, mas os produtos que tem os preços igual ou acima de 30 reais nesse novo array devem custar a metade do preço original*/

const products = [
    {name: 'mouse sem fio' , price: 30},
    {name: 'Pen Drive' , price: 25},
    {name: 'Cartucho de Tinta' , price: 50},
    {name: 'Suporte Ergonômico para Notebook' , price: 23},
    {name: 'Repetidor de sinal Wi-fi' , price: 44},
]

/*const saleproducts = products.map((product) => {
    if (product.price >= 30) {
        return {name: product.name, price: product.price/2}
    }    
    return product
})
console.log(saleproducts)
console.log(products)*/

/* propriedades: name, price; objeto: pen drive, 25 etc. 8*/
/* E se o preço do produto não for maior ou igual a 30? No map, sempre preciso retornar um valor */
/* Porque ao invés de criar e retornar um objeto nós não modificamos o valor da propriedade do objeto recebido por um parâmetro? */
/* Se mudarmos o código dessa maneira: 

const saleproducts = products.map((product) => {
    if (product.price >= 30) {
        //return {name: product.name, price: product.price/2}
       product.price = product.price /2
       return product 
    }    
    return product
})
console.log(saleproducts)
console.log(products)*/
/* Com essa reatribuição estamos modificando diretamente esses objetos do array products e não queremos fazer isso. 
   Nosso objetivo é gerar um novo array com novos itens e manter o array original intacto.
*/

