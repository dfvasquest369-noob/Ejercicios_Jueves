/*const formato = document.getElementById("formato");
const mensaje = document.getElementById("mensaje");

formato.addEventListener("change",function(){
    switch(formato.value){
        case "bicicleta":
            mensaje.textContent="Cuidado con los camiones.";
            break;
        case "motocicleta":
            mensaje.textContent="Utiliza el casco.";
            break;
        case "automovil":
            mensaje.textContent="Carga el kit de seguridad.";
            break;
        case "camion":
             mensaje.textContent="Ojo con los espejos";
            break;
        default:
            mensaje.textContent="Seleccione un formato.";
    }
}); 

const limite = document.getElementById("limite");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click",function(){
    let maximo = Number(limite.value);
    let numero = 1;
    let texto = "";

    while(numero<=maximo){
        texto += numero + " ";
        numero++;
    }
    resultado.textContent=texto;
});


let numero = 1;

do{
    console.log(numero);
    numero++;
}while(numero<=7);


let numero;

do{
    numero=Number(
        prompt("Ingrese un numero entre 1 y 10:")
    );
}while(numero<1||numero>100);
console.log("Valor aceptado:",numero);


for(let i= 0;i<=10;i++){
    console.log(i);
}

const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    resultado.replaceChildren();

    if (!numero.value || !numero.checkValidity()) {
        resultado.textContent = "Ingrese un número entero mayor que 0.";
        return;
    }

    const num = Number(numero.value);
    const tabla = document.createElement("table");
    const cuerpo = tabla.createTBody();

    for (let i = 1; i <= 10; i++) {
        const fila = cuerpo.insertRow();
        fila.insertCell().textContent = `${num} × ${i}`;
        fila.insertCell().textContent = String(num * i);
    }

    resultado.appendChild(tabla);
});
*/