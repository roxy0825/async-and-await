function proceso1(nombreUsuario){
    let promesa= new Promise(function(resuelve, rechaza) {
        setTimeout(function(){
            if(nombreUsuario=="ADMIN"){
                resuelve("exito")

            }else{
                rechaza("falla")
            }
        },2000)
    })
    return promesa
}
async function llamandoAlapromesa(){
    console.log("estamos llamando...")
    try{
        let respuesta=await proceso1("ADMIN")
        console.log(respuesta)
    }catch(error){
        console.log(respuesta)
    }
}

llamandoAlapromesa()
