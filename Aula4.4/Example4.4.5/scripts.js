// Exemplo 4.4.5 Bloco 4.4
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for(let key in info, info2){
    console.log(info[key] + " e " + info2[key]);
}
// Resultado
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Sim e Sim