/*const transporte = document.getElementById("transporte");
const respuesta = document.getElementById("respuesta");

transporte.addEventListener("change", function(){
    respuesta.textContent="opcion seleccionada:"+
    transporte.value;
});*/

/*const tipo_entrega = document.getElementById
("entrega");

const salida = document.getElementById("salida");

tipo_entrega.addEventListener("change", function(){
    let opcion = tipo_entrega.value;

    if (opcion === "domicilio"){
        salida.textContent = "Entrega estimada:2 dias.";
    } else if (opcion === "tienda"){
        salida.textContent ="Puede recoger hoy.";
    } else{
        salida.textContent ="Seleccione una opcion";
    }
});*/

const transporte = document.getElementById("transporte");
const respuesta = document.getElementById("respuesta");

transporte.addEventListener("change", function() {
    if (transporte.value === "baja") {
        respuesta.textContent = "Puede esperar";
    } else if (transporte.value === "media") {
        respuesta.textContent = "Atender próximamente";
    } else if (transporte.value === "alta") {
        respuesta.textContent = "Atención prioritaria";
    } else {
        respuesta.textContent = "";
    }
});



    

