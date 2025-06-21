/*
## 1. **Validação de Formulário de Cadastro**

**Contexto:**

Você está fazendo um cadastro de usuário. O sistema só permite cadastrar pessoas com 18 anos ou mais.

**Exercício:**

- Guarde em variáveis: o nome da pessoa, idade e se ela aceitou os termos de uso (boolean).
- Verifique se a pessoa pode se cadastrar (maior de idade e aceitou os termos).
- Mostre no console:
    - “Cadastro liberado para [nome]!”
    - ou
    - “Cadastro não permitido.”



*/

const idade  = 18;
const aceitouContrato = true 
const nome = "Igor Lima"
//Obs: só vai entrar se for maior de idade e aceitar o contrato ! se tiver só um dos dois , nao entra !!!!!!
if(idade >= 18 && aceitouContrato === true){
    console.log(`${nome} é maior de idade e aceitou o contrato!`)
}else{
    console.log(`Ou você não é maior de idade ou Não aceitou os contratos ! ${nome}`)
}