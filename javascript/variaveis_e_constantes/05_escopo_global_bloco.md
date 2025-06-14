# Escopo em JavaScript
## Escopo Global
Variável criada fora de funções ou blocos.

Pode ser acessada em qualquer parte do código.

Atenção: Usar muitas variáveis globais pode causar confusão e erros.

javascript
Copiar
var nome = "Igor"; // escopo global

function mostrarNome() {
  console.log(nome); // funciona!
}

console.log(nome); // funciona também!
Escopo de Bloco
Variável criada dentro de chaves {} usando let ou const.

Só pode ser usada dentro desse bloco.

javascript
Copiar
{
  let idade = 25; // escopo de bloco
  console.log(idade); // funciona!
}
console.log(idade); // ERRO: idade não existe aqui
Dica
Prefira usar variáveis de escopo de bloco (let e const) para evitar problemas no seu código!