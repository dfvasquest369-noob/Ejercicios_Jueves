/*const ayuda=document.getElementById("ayuda");
const usuario=document.getElementById("usuario");
const entrada=document.getElementById("entrada");
const salida=document.getElementById("salida");
const formulario=document.getElementById("formulario");
const porcentaje=document.getElementById("porcentaje");

usuario.addEventListener("focus",function(){
    ayuda.textContent=
    "Use entre 5 y 12 caracteres.";
});

usuario.addEventListener("blur",function(){
    let cantidad=usuario.value.length;

    if(cantidad<5){
        ayuda.textContent="Nombre demasiado corto.";
    } else{
        ayuda.textContent="Nombre valido.";
    }
});

entrada.addEventListener("keydown",function(event){
    console.log(event.key);
});

busqueda.addEventListener("keydown",function(event){
    
    if (event.key==="Enter"){
        salida.textContent=
        "Buscando:"+ busqueda.value;
    }
});

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Formulario procesado");

    let codigo=nombre.value;

    if(codigo.length>=4){
        mensaje.textContent="Codigo aceptado.";
    } else{
        mensaje.textContent=
        "El codigo debe tener minimo 4 caracteres.";
    }
});

porcentaje.addEventListener("input",function(){

    let valor=Number(porcentaje.value);
    if(valor<0||valor>100){
        estado.textContent="Valor fuera de rango";
    } else{
        estado.textContent="Valor valido";
    }
});

nombre.addEventListener("blur",function(){

    if (nombre.value === "") {
    mensaje.textContent = "Este campo es obligatorio.";
} else {
    mensaje.textContent = "Campo diligenciado.";
}
});*/

/*const passwordInput=document.getElementById("passwordInput");
const mensaje=document.getElementById("mensaje");

passwordInput.addEventListener("focus",function(){
    mensaje.textContent="Requisitos:Debe tener un minimo de 8 caracteres.";
});

passwordInput.addEventListener("input",function(){
    const cantidadCaracteres=passwordInput.value.length;
    mensaje.textContent="Cantidad de caracteres:" + cantidadCaracteres;
});

passwordInput.addEventListener("blur",function(){
    const longitud=passwordInput.value.length;

    if(longitud>=8){
        mensaje.textContent="Contraseña valida (Minimo 8 caracteres cumplido).";
    } else {
        mensaje.textContent="Contraseña invalida. faltan" + (8-longitud) + "caracteres.";
    }
});*/

