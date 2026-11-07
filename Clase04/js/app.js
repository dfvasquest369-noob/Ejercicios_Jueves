/*let nivel = 72;

if (nivel>=90){
    console.log("Nivel alto");
} else if (nivel>=60){
    console.log("Nivel medio");
} else{
    console.log("Nivel bajo");
}*/

/*console.log(5===5);
console.log(5==="5");
console.log("admin"==="admin");
console.log(true===1);*/

/*const boton = document.getElementById("mostrar");
const salida = document.getElementById("salida");

boton.addEventListener("click",function(){
    salida.textContent = "El boton fue presionado.";
});*/

/*const nombre = document.getElementById("Nombre");
const vista = document.getElementById("Vista");

nombre.addEventListener("input",function(){
    vista.textContent = nombre.value;
});*/

/*const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

mensaje.addEventListener("input", function(){
    let cantidad = mensaje.value.length;

    contador.textContent=
    "Caracteres escritos:" + cantidad;
});*/

/*const entrada_nivel = document.getElementById("nivel");
const salida_nivel = document.getElementById("estado");

entrada_nivel.addEventListener("input",function(){
    let nivel = Number(entrada_nivel.value);

    if (nivel>=80){
        salida_nivel.textContent = "Nivel alto";
    } else if (nivel>=40){
        salida_nivel.textContent = "Nivel medio";
    } else {
        salida_nivel.textContent = "Nivel bajo";
    }
});*/

/*const entrada_personas = document.getElementById("personas");
const salida_resultado = document.getElementById("resultado");

entrada_personas.addEventListener("input", function() {

    let personas_texto = entrada_personas.value;

    if (personas_texto === "") {
        salida_resultado.textContent =
            "Ingresa la cantidad de personas.";
        return;
    }

    let personas = Number(personas_texto);

    if (personas < 0) {
        salida_resultado.textContent =
            "La cantidad no puede ser negativa.";
    } else if (personas < 20) {
        salida_resultado.textContent = "Aforo bajo";
    } else if (personas <= 49) {
        salida_resultado.textContent = "Aforo medio";
    } else {
        salida_resultado.textContent = "Aforo alto";
    }

    console.log("Cantidad de personas:", personas);
    console.log("Resultado:", salida_resultado.textContent);

});*/








