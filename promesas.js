//una promesa es un callback con cirugia plastica
//una promesa es una funcion asincrona que facilita su escritura a traves
//de 2 callback (resolve y reject)

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
 proceso1("ADMIN")

 .then(function(respuesta){console.log(respuesta)})//camino de exito
 .catch(function(respuesta){console.log(respuesta)})//camino de rechazo
