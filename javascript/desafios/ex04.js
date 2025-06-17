//4. Conversão de Dados de API

const logado = true
const premium = true

if(logado === true && premium === true){
    console.log( `Pode acessar a area usuario esta logado ? ${logado} \n usario esta com  acesso a area vip ? : ${premium}` )
}else{
    console.log(`usuario não está logado e nem com acesso a area vip`)
}