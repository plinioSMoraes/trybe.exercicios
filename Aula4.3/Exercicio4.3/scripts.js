function fatorial(number){
    let resultado = number; // armazena o fatorial
    for(let index = number-1; index>1; index-= 1){ // diminui o numero multiplicando
        resultado *= index;                        // o resultado até 2
    }
    console.log(resultado); // printa o resultado
}
fatorial(4); // chama a funcao