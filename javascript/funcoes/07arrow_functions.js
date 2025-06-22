const showMessage = () =>{
    console.log("Olá")
}

console.log(showMessage)
showMessage()

const showMessage2 = (username , email) => {
    console.log(`olá , ${username}.Seu email é ${email}`)
}
showMessage("Igor" , "igor@gmail.com")