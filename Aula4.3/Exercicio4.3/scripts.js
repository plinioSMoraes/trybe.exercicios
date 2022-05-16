function fatorial(number){ // funcao fatorial - Exercicio 1
    let resultado = number; // armazena o fatorial
    for(let index = number-1; index>1; index-= 1){ // diminui o numero multiplicando
        resultado *= index;                        // o resultado até 2
    }
    console.log(resultado); // printa o resultado
}
// fatorial(4); // chama a funcao

function inverteWord(palavra){ // inverte uma palavra - Exercicio 2
    let newWord = ""; // cria uma palavra nova, porque nao da pra modificar strings
    for(let index = palavra.length-1; index >= 0; index -= 1){
        newWord = newWord + palavra[index]; // concatena a ultima letra da string com a palavra criada
    }
    console.log(newWord); // printa a palavra invertida
}
// inverteWord("tryber"); // chama a funcao inverte palavras

let array = ['java', 'javascript', 'python', 'html', 'css'];

function maiorEMenorPalavra(arrayWords){ // printa a maior e a menor palavra de um array - Exercicio 3
    let biggestWord = "";
    let smallestWord = arrayWords[0];
    for(let index = 0; index < arrayWords.length; index += 1){ // percorre o array
        if(biggestWord.length < arrayWords[index].length){ // mede o tamanho das palavras e a maior e guardada
            biggestWord = arrayWords[index];
        }
        if(smallestWord.length > arrayWords[index].length){ // mede o tamanho das palavras e a menor e guardada
            smallestWord = arrayWords[index];
        }
    }
    console.log("A maior palavra é: " + biggestWord);
    console.log("A menor palavra é: " + smallestWord);
}
//maiorEMenorPalavra(array);