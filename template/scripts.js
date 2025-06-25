//visualizar o conteudo do document

console.log(document)

//obetr o title da pagina
console.log(document.title)

//acessar e elemento pelo ID
const guest = document.getElementById("guest-2")
console.log(guest)

//Mostra as  propriedades do objeto
console.dir(guest)


//acessar elementos com class(seletor class)
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

//exibir o primeiro elemento da lista
console.log(guestByClass.item(0))
console.log(guestByClass[1])


//selecionar lista elementos pela tag
const guestBytag = document.getElementsByTagName("li")
console.log(guestBytag)
