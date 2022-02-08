/* Método Filter = como o map, o filter também recebe uma função como argumento e executa essa função para cada item d eum array.
 O Filter é usado quando baseado em uma condição, você precisar obter um novo array com só alguns itens do array original.
 */

 const randomnumbers = [36, 99, 37, 63]
 const numbersgreaterthan37 = randomnumbers.filter ((number) => number > 37)
 

 /* Como comprovamos que o filter retornou um novo array? */
 console.log(numbersgreaterthan37)
 console.log(randomnumbers)
 /*
 O ponto chave do filteré entender que o item que esta sendo interado vai ser adicionado no novo array só quando a condição que essa função retorna resultar em true
 */