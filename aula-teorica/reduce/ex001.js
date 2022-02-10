/*
De forma similar ao map e filter, o reduce também recebe uma função como argumento e executa essa função para cada item do array. Só que é um pouco diferente do MAP e do Filter.
Ele vai ser usado quando baseado no array original você precisar reduzir o array a outro tipo de dado que pode ser um objeto literal, uma string, um número ou até mesmo um outro array.
Ao contrário do map e do filter, o reduce tem poder e versatilidade para gerar um output que não necessariamente vai ser um array.
*/

/*
EXEMPLO 1

Imagina que temos um array de números e queremos obter a soma de todos esses números ou seja, vamos reduzir esse array a um único valor: um número 
*/

const numbers = [1, 2, 3]

const sumresult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumresult)

/*
Essa função vai ser executada  para cada item do array numbers. 

Na primeira vez que ela for executada, o parâmetro accumulator recebe o segundo argumento do reduce que é zero.
O parâmetro item recebe o primeiro item do array que é o um.
Essa função vai retornar o resultado da expressão accumulator + item = 0 + 1 que é igual a 1.
Esse 1 vai ser atribuido implicitamente para o parâmetro accumulator.

Na segunda vez que a função for executada, o parâmetro accumulator armazena o valor 1, o parâmetro item armazena o segundo item do array (2) e essa função vai retornar o resultado dessa expressão (1+2) = 3 que será atribuído no parâmetro accumulator.

Na terceira e última vez que a função é executada, (porque o array só tem 3 itens), o parâmetro accumulator armazena o valor que a função retornou na execução passada (3) e o item armazena o terceiro item do array que é o (3).
A função vai retornar o resultado dessa expressão (3 + 3) = 6.
Como a função foi executada para todos os itens do array o reduce retorna 6.
Para visualizarmos esse valor:

console.log (sumresult)

No reduce é fundamental entender duas coisas:
 1 -  a função precisa retornar um valor.
 2 - cada vez que esse valor é retornado, o parâmetro accumulator recebe esse valor. Porque ele existe para acumular o valor a cada execução da função e lembrar desse valor a cada execução.

 O segundo argumento opcional (0) serviu para ser o valor do accumulator na primeira vez que a função foi executada.
 É uma boa prática especificar esse segundo argumento para que tenhamos uma representação explícita visual do dipo de dado que o reduce vai retornar.
 Se não o colocássemos na primeira vez que a função fosse executada, o parâmetro accumulator receberia o prmeiro item do array e o parâmetro item receberia o segundo item do array. 



*/



