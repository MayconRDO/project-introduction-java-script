// Manipulando Arrays

let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push('nodejs');

// Adicionar no começo
techs.unshift('sql');

// Remover do fim
techs.pop();

// Remover do começo
techs.shift();

// Pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

// Remover 1 ou mais items em qualquer posição do array
techs.splice(1, 3);

// Encontrar a posição de um elemento no array
let index = techs.indexOf('css');


console.log(techs);