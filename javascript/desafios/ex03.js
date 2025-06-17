//1. Validação de Formulário de Cadastro
//Contexto:
//Você está fazendo um cadastro de usuário. O sistema só permite cadastrar pessoas com 18 anos ou mais.
//Guarde em variáveis: o nome da pessoa, idade e se ela aceitou os termos de uso (boolean).
//Verifique se a pessoa pode se cadastrar (maior de idade e aceitou os termos).
//Mostre no console:
//“Cadastro liberado para [nome]!”
//ou
//“Cadastro não permitido.”
const firstName = "Igor lima";
const age = 20;
const acceptedTheTerm = true

if(age >= 18 && acceptedTheTerm === true){
    console.log(`Cadastro liberado para ${firstName}`)
}else{
    console.log(`Cadastro não permitido , ${firstName}`)
}