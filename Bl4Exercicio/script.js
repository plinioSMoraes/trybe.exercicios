function soma(a,b){ //soma dois numeros
    return a+b;
}
//console.log(soma(4,5));
function subtrai(a,b){ //diminui um valor por outro
    return a-b;
}
//console.log(subtrai(4,5));
function multiplica(a,b){ // multiplica dois numeros
    return a*b;
}
//console.log(multiplica(4,5));
function divide(a,b){//divide um numero por outro
    return a/b;
}
//console.log(divide(4,5));
function resto(a,b){ //resto da divisao entre dois numeros
    return a%b;
}
//console.log(resto(4,5));
function maior(a,b){ //retorna o maior numero
    if(a>b){
        return a; // a é o maior
    }else{
        return b; // b é o maior
    }
}
//console.log(maior(7,5));
function maiorDe3(a,b,c){ // retorna o maior valor dentre 3 valores
    if(a>b){ // testa se a é maior que b
        if(a>c){ // a é maior que b, testa se é maior que c
            return a; // a é o maior
        }else{
            return c; // c é o maior
        }
    }else if(b>c){ // b é maior que a, testa se b é maior que c
        return b; // b é o maior
    }else{
        return c; // c é o maior
    } // se os numeros forem iguais, ainda um deles é maior ou igual retornando o unico valor
}
//console.log(maiorDe3(7,6,6));
function sinal(a){ // diz se o numero é positivo, negativo ou é zero
    if (a>0){ // se a é maior que 0, entao é positivo
        return "positive";
    }else if(a<0){ // se a é menor que 0, entao é negativo
        return "negative";
    }else{ // senao é zero
        return "zero";
    }
}
//console.log(sinal(0));
function eTriangulo(a,b,c){ //pelos angulos diz se é um triangulo
    if((soma(a,b)+c)== 180){ //usando a funçao soma 
        return true; // soma da 180, sendo assim um triangulo
    }else{
        return false; // soma nao da 180, nao sendo um triangulo
    }
}
// console.log(eTriangulo(60,65,50)); // false
function movimentoXadres(piece){ //diz como a peça do xadrez move
    piece = piece.toLowerCase();
    switch (piece){
        case "rei":
            console.log("Somente um quadrado para qualquer lado!");
            break;
        case "rainha":
            console.log("Em linha reta ou diagonal, pela distancia que quiser, ou até acertar outra peça!");
          break;
        case "bispo":
            console.log("Somente em diagonal!");
            break;
        case "cavalo":
            console.log("Movimentos em L, pula outras peças!");
            break;
        case "torre":
            console.log("Somente em linha reta, quantas casas quiser ou ate acertar outra peça!");
            break;
        case "peao":
            console.log("Somente uma casa por vez e apenas para frente!");
            break;
        default:
            console.log("Não é uma peça de xadrez!");
    }
}
movimentoXadres("toRdRe");
