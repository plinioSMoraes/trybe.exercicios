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
console.log(isPalindrome("anana")); // chama a funcao