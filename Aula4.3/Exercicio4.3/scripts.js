function fatorial(number){
    let resultado = number; // armazena o fatorial
    for(let index = number-1; index>1; index-= 1){ // diminui o numero multiplicando
        resultado *= index;                        // o resultado até 2
    }
    console.log(resultado); // printa o resultado
}
// fatorial(4); // chama a funcao

function inverteWord(palavra){ // inverte uma palavra
    let newWord = ""; // cria uma palavra nova, porque nao da pra modificar strings
    for(let index = palavra.length-1; index >= 0; index -= 1){
        newWord = newWord + palavra[index]; // concatena a ultima letra da string com a palavra criada
    }
    console.log(newWord); // printa a palavra invertida
}
// inverteWord("tryber"); // chama a funcao inverte palavras