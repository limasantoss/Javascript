function execute(taskName , callback){
    console.log("Executando a tarefa " , taskName)

    callback()
}

function callback(){
    console.log("Tarefa finaliza")
}

execute("Danwload do arquivo ... ", callback)

execute("Upload do arquivo ..." ,function( ){

    console.log("Função de callback com uma função anônima.")
})
