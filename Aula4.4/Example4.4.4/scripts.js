// Example 4.4.4 Bloco 4.4
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

for(let key in info){
    console.log(info[key]);
}