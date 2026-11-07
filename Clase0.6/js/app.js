const numeroUno = document.getElementById('numeroUno');
const numeroDos = document.getElementById('numeroDos');
const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');

const calcular = () => {
    const a = Number(numeroUno.value);
    const b = Number(numeroDos.value);
    const seleccion = operacion.value;

    if (numeroUno.value === '' || numeroDos.value === '' || seleccion === '') {
        resultado.textContent = 'Completa todos los campos';
        return;
    }

    let total;

    switch (seleccion) {
        case 'sumar':
            total = a + b;
            break;
        case 'restar':
            total = a - b;
            break;
        case 'multiplicar':
            total = a * b;
            break;
        case 'dividir':
            if (b === 0) {
                resultado.textContent = 'No se puede dividir entre 0';
                return;
            }
            total = a / b;
            break;
        case 'porcentaje':
            total = (a * b) / 100;
            break;
        default:
            resultado.textContent = 'Selecciona una operación válida';
            return;
    }

    resultado.textContent = `Resultado: ${total}`;
};

const limpiar = () => {
    numeroUno.value = '';
    numeroDos.value = '';
    operacion.value = '';
    resultado.textContent = 'Resultado: 0';
    numeroUno.focus();
};

document.getElementById('calcularBtn').addEventListener('click', calcular);
document.getElementById('limpiarBtn').addEventListener('click', limpiar);
