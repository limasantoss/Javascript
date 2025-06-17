//1. Validação de Formulário de Cadastro

const firstName = "Igor lima";
const age = 20;
const acceptedTheTerm = true

if(age >= 18 && acceptedTheTerm === true){
    console.log(`Cadastro liberado para ${firstName}`)
}else{
    console.log(`Cadastro não permitido , ${firstName}`)
}