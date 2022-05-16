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

function mediaArray(numbers){ //funcao que retorna a media de um array - Exercicio 3
    let mediaArray = 0; // variavel media
    for(let index =0; index<numbers.length; index += 1 ){ // percorre o array
        mediaArray += numbers[index]; // soma os itens do array
    }
    mediaArray /= numbers.length ; // diviide a soma de todos itens do array pelo tamanho do array
    console.log(mediaArray); // printa o resultado na variavel mediaArray
    if(mediaArray>20){
        console.log("Media é maior que 20.");
    }else{
        console.log("Média é menor ou igual a 20.");
    }
}
//mediaArray(numbers); // chama a funcao

function maiorValorArray(numbers){ // funcao maior valor no array - Exercicio 4
    let biggestNumber = 0; // variavel que contem o maior numero
    for(let index = 0; index < numbers.length; index+=1){ //percore o array
        if(biggestNumber < numbers[index]){ // verifica qual numero e maior
            biggestNumber = numbers[index]; // armazena o maior numero na variavel
        }
    }
    console.log(biggestNumber); // printa o resultado
}
//maiorValorArray(numbers); // chama a funcao

function quantosImparesArray(numbers){
    let quantImpares = 0;
    for(let index = 0; index < numbers.length; index++){ //percore o array
        if(numbers[index]%2 != 0){ // se o resto é zero, entao o numero e par, senao e impar
            quantImpares += 1; //soma mais um se for impar
        }
    }
    if(quantImpares > 0){ //se a quant de impares for 0, printa nenhum valor encontrado senao printa a quant
        console.log(quantImpares);
    }else{
        console.log("Nenhum valor ímpar encontrado.");
    }
}
//quantosImparesArray(numbers); // chama funcao

function menorValorArray(numbers){
    let menorValor = 9999999999; // se eu usar 0, o menor valor vai ser 0, usar valor grande - Exercicio 7
    for(let index = 0; index < numbers.length; index+= 1){ // percorre array
        if(menorValor > numbers[index]){ // se maior troca o valor pelo menor
            menorValor = numbers[index];
        }
    }
    console.log(menorValor); // printa o resultado
}
//menorValorArray(numbers); // chama a funcao

let numbersTo25 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,
    5, 9, 3, 19, 70, 8, 100, 2, 35, 27,5, 9, 3, 19, 70]; // Exercicio 8

//console.log(numbersTo25); // Exercicio 8

function divideBy2(numbersTo25){ // Exercicio 9
    for(let index =0; index < numbersTo25.length; index+= 1){ // percorre o array
        numbersTo25[index] /= 2;  // divide cada posicao por 2
    }
    console.log(numbersTo25); // printa o novo array divido por 2
}
//divideBy2(numbersTo25); // chama a funcao

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function ordenaCrsArray(numbers){ // Ordena Crescente Array - Exercicio Bonus 1
    for(let index = 1; index < numbers.length; index += 1){ //percorre o array
        for(let index2 = 0; index2 < index; index2 += 1){ // percorre o array até onde o index está
            if(numbers[index2] > numbers[index]){ // se a pos do index(que esta a frente) é menor, troca e passa pra tras
                let swap = numbers[index];        // senao mantem e incrementar o index2 que está atras
                numbers[index] = numbers[index2];
                numbers[index2] = swap;
            }
        }
    }
    console.log(numbers); // printa o array ordenado
}
//ordenaCrsArray(numbers); // chama a funcao ordena array

function ordenaDrsArray(numbers){ // Ordena Decrescente Array - Exercicio Bonus 2
    for(let index = 1; index < numbers.length; index += 1){ //percorre o array
        for(let index2 = 0; index2 < index; index2 += 1){ // percorre o array até onde o index está
            if(numbers[index2] < numbers[index]){ // se a pos do index(que esta a frente) é menor, troca e passa pra tras
                let swap = numbers[index];        // senao mantem e incrementar o index2 que está atras
                numbers[index] = numbers[index2];
                numbers[index2] = swap;
            }
        }
    }
    console.log(numbers); // printa o array ordenado
}
ordenaDrsArray(numbers); // chama a funcao ordena array