/*

## 3. **Sistema de Acesso Restrito**

**Contexto:**

Para acessar uma área VIP, o usuário precisa estar logado **e** ser “premium”.

**Exercício:**

- Crie variáveis: `logado` (boolean) e `premium` (boolean).
- Verifique se ele pode acessar a área VIP.
- Mostre no console a mensagem adequada.







*/

const logado = true
const premium = true

if( logado === true && premium === true){
    console.log(`logado : ${logado} premium : ${premium} , acesso Liberado!`)
}else{
    console.log(`Provalvemente você não está logado ou não é premium !!`)
}