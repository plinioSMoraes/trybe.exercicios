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


// Exercicio 4.3.4
function ePrimo(number){ // diz se o numero é primo
    let divisors = 0; // quantidade de divisores de um numero
    for(let index = 1; index <=number; index += 1){ // percorre o numero dividindo ele pelos seus antecessores
        if(number%index == 0){
            divisors += 1;
        }
    }
    if(divisors <=2){ // se divisores maior que 2, nao e primo
        return "true";
    }else{
        return "false";
    } 
}
function maiorPrimo(number){ // retorna o maior numero primo dos antecessores de um numero
    let maiorPrimo = 0; // seta o maior primo como 0
    for(let index = 1; index <= number; index += 1){ //percorre os antecessores do numero pra ver qual e primo
        let primo = ePrimo(index); // chama a funcao pra ver se o numero e primo
        if(primo == "true"){ // se for primo, ve se ele e maior que o primo setado
            if(maiorPrimo < index){ // se for seta ele como novo primo
                maiorPrimo = index;
            }
        }
    }
    console.log(maiorPrimo); // retorna o maior primo entre os antecessores do numero ou ele mesmo
}
maiorPrimo(10000); // chama a funcao