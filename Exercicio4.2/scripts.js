let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function runArray(numbers){ // printa todos itens do array - Exercicio 1
    for(let index =0; index<numbers.length; index += 1 ){ // percorre o array
        console.log(numbers[index]); //printa a posicao index do array numbers
    }
}
//runArray(numbers); // chama a funcao de printa array

function somaArray(numbers){ // funcao soma itens do array - Exercicio 2
    let resultadoSoma = 0; // variavel que armazena a soma de todos itens do array
    for(let index =0; index<numbers.length; index += 1 ){ // percorre o array
        resultadoSoma += numbers[index]; //soma mais uma posicao do array
    }
    console.log(resultadoSoma); // printa o resultado da soma de todos itens do array
}
//somaArray(numbers); // chama a funcao