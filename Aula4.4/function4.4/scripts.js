// Functions Bloco 4.4
// Exemplo 4.4.1 
function isPalindrome(string){
    let upSideString = []; // array onde cada caractere da string sera armazenado
    let newString; // variavel onde a palavra escrita ao contrario sera armazenado
    for(let index = string.length-1; index>= 0; index -= 1){ // percorre a string de tras pra frente
        upSideString.push(string[index]);  // colocar no array o caractere
    }
    newString = upSideString.join(''); // transforma o array em string e armazena na variavel
    if(newString == string){ // compara as variaveis
        return true; // se ainda assim forem iguais e palindromo
    }else{
        return false; // se diferentes nao sao palindromos
    }
}
//console.log(isPalindrome("anana")); // chama a funcao

// Exemplo 4.4.2
let numbers = [5, 3, 15, 11, 1, 12]; // array de teste
function biggerValue(numArray){ // funcao que retorna o indice do maior numero do array
    let indexBiggestNum; // armazena o indice do maior numero do array
    for(let index = 1 ; index < numArray.length; index += 1){ // percorre o array
        if(numArray[index] > numArray[index-1]){ // se o numero no indice e maior que o numero no 
            indexBiggestNum = index; // indice anterior, armazena o indice
        }
    }
    return indexBiggestNum; // retorna o indice do maior numero
}
//console.log(biggerValue(numbers)); // chama a funcao

// Exercicio 4.4.3 
function smallestNumber(numbers){ // retorna o indice do menor numero
    let smallestIndex = 0; // inicia a variavel que armazena o menor indice
    let smallestNum = 999999999999999; // um numero grande pra nao atrapalhar o teste
    for(let index = 0; index < numbers.length -1 ; index += 1){ // percorre o array
        if(smallestNum > numbers[index]){ //ve qual e menor
            smallestIndex = index; // armazena o indice do menor
            smallestNum = numbers[index]; // armazena o valor do menor
        }
    }
    return smallestIndex; //retorna o indice do menor numero
}
console.log(smallestNumber(numbers)); // chama a funcao