// necesito ir  a netflix y autenticarme
function procesoUno(nombreUsuario,procesoDos){//declarando
    setTimeout(function(){
        if(nombreUsuario=="ADMIN"){
            procesoDos("Exito",null)//llamando a 2
        }else{
            procesoDos(null,"Falla")//llamando a 2
        }
    },2000)

}
procesoUno("ADMIN",function(resuelvo,rechazo){
    if (resuelvo!=null) {
        console.log("Bienvenido a netflix")
    }else{
        console.log("Revisa tus datos")
    }
})// llamando a 1