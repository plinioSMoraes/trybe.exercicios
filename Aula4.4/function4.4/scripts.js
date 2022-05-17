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
let numbers = [2, 3, 6, 11, 10, 12]; // array de teste
function biggerValue(numArray){ // funcao que retorna o indice do maior numero do array
    let indexBiggestNum; // armazena o indice do maior numero do array
    for(let index = 1 ; index < numArray.length; index += 1){ // percorre o array
        if(numArray[index] > numArray[index-1]){ // se o numero no indice e maior que o numero no 
            indexBiggestNum = index; // indice anterior, armazena o indice
        }
    }
    return indexBiggestNum; // retorna o indice do maior numero
}
console.log(biggerValue(numbers)); // chama a funcao