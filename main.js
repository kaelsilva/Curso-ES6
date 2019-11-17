const usuario = {
    nome: 'kael',
    idade: '99',
    empresa: 'ufrn'
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);