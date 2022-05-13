function soma(a,b){ //soma dois numeros - Exercicio 1
    return a+b;
}
//console.log(soma(4,5));

function subtrai(a,b){ //diminui um valor por outro - Exercicio 1
    return a-b;
}
//console.log(subtrai(4,5));

function multiplica(a,b){ // multiplica dois numeros - Exercicio 1
    return a*b;
}
//console.log(multiplica(4,5));

function divide(a,b){//divide um numero por outro - Exercicio 1
    return a/b;
}
//console.log(divide(4,5));

function resto(a,b){ //resto da divisao entre dois numeros - Exercicio 1
    return a%b;
}
//console.log(resto(4,5));

function maior(a,b){ //retorna o maior numero - Exercicio 2
    if(a>b){
        return a; // a é o maior
    }else{
        return b; // b é o maior
    }
}
//console.log(maior(7,5));

function maiorDe3(a,b,c){ // retorna o maior valor dentre 3 valores - Exercicio 3
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

function sinal(a){ // diz se o numero é positivo, negativo ou é zero - Exercicio 4
    if (a>0){ // se a é maior que 0, entao é positivo
        return "positive";
    }else if(a<0){ // se a é menor que 0, entao é negativo
        return "negative";
    }else{ // senao é zero
        return "zero";
    }
}
//console.log(sinal(0));

function eTriangulo(a,b,c){ //pelos angulos diz se é um triangulo - Exercicio 5
    if((soma(a,b)+c)== 180){ //usando a funçao soma 
        return true; // soma da 180, sendo assim um triangulo
    }else{
        return false; // soma nao da 180, nao sendo um triangulo
    }
}
// console.log(eTriangulo(60,65,50)); // false

function movimentoXadres(piece){ //diz como a peça do xadrez move - Exercicio 6
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
//movimentoXadres("toRdRe");

function conceitoAtoF(nota){ //Transforma uma nota numerica em conceito - Exercicio 7
    if(nota>=90 && nota<=100){
        return "A"
    }else if(nota>=80 && nota<90){
        return "B";
    }else if(nota>=70 && nota<80){
        return "C";
    }else if(nota>=60 && nota<70){
        return "D";
    }else if(nota>=50 && nota<60){
        return "E";
    }else if(nota<50 && nota>=0){
        return "F"
    }else{
        return "Error!!"
    }
}
//console.log(conceitoAtoF(55)); // Conceito E

function peloMenosUmPar(a,b,c){ //dentre 3 numeros se um e par retorna true - Exercicio 8
    if(a%2 == 0 || b%2==0 || c%2==0){
        return true; // pelo menos um deles é par
    }else{
        return false; // nenhum é par
    }
}
//console.log(peloMenosUmPar(0,1,5));

function peloMenosUmImpar(a,b,c){ //dentre 3 numeros se um e impar retorna true - Exercicio 9
    if(a%2 != 0 || b%2 != 0 || c%2 != 0){
        return true; // pelo menos um deles é impar
    }else{
        return false; // nenhum é impar
    }
}
//console.log(peloMenosUmImpar(1,1,1)); //true

function lucro(custo, valorVenda){ // gera o lucro de uma empresa - Exercicio 10
    let = lucro;
    if(custo <= 0 || valorVenda <= 0){ // custo e valorVenda nao podem ser 0, quebra o programa
        return "Error!!";
    }else{
        lucro = valorVenda - (custo + custo*1.2); // formula para o lucro
        return lucro; // retorna o lucro da empresa
    }
}
//console.log(lucro(1,10)); // testa, result 7.8

function impostoDeRenda(salarioBruto){
    let salarioBase = salarioBruto;
    let salarioLiquido = 0;
    if(salarioBruto> 5189.82){ // valor do inss a ser deduzido do salario bruto
        salarioBase -= 570.88;
    }else if(salarioBruto >= 2594.93 && salarioBruto <=5189.82){
        salarioBase *= 0.89;
    }else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        salarioBase *= 0.91;
    }else{
        salarioBase *= 0.92;
    }
    //console.log(salarioBase); //mostra o salario base depois de deduzido o inss do salario bruto
    if(salarioBase > 4664.68 ){ //valor do imposto de renda a ser deduzido do salario base apos reduçao do inss
        salarioLiquido = salarioBase - (salarioBase * (27.5/100) - 869.36);
    }else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
        salarioLiquido = salarioBase -(salarioBase * (22.5/100) - 636.13);
    }else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
        salarioLiquido = salarioBase -(salarioBase * (15/100) - 354.8);
    }else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
        salarioLiquido = salarioBase -(salarioBase * (7.5/100) - 142.8);
    }else{
        salarioLiquido = salarioBase;
    }
    return salarioLiquido;
}
console.log(impostoDeRenda(3000)); // salarioLiquido = 2612.55