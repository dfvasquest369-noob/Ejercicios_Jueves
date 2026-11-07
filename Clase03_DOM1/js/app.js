/*const entradaFahrenheit = document.getElementById("fahrenheit");
const botonConvertir = document.getElementById("convertir2");
const salidaResultado = document.getElementById("resultado2");
const entradaCelsius = document.getElementById("celsius");
const botonConvertirCelsius = document.getElementById("convertirCelsius");
const salidaResultadoCelsius = document.getElementById("resultadoCelsius");

botonConvertir.addEventListener("click", function () {
    const fahrenheitTexto = entradaFahrenheit.value.trim();

    if (fahrenheitTexto === "") {
        salidaResultado.textContent = "Ingresa una temperatura en Fahrenheit.";
        return;
    }

    const fahrenheit = Number(fahrenheitTexto);

    if (!Number.isFinite(fahrenheit)) {
        salidaResultado.textContent = "Ingresa una temperatura válida.";
        return;
    }

    const celsius = (fahrenheit - 32) * (5 / 9);
    salidaResultado.textContent =
        `${fahrenheit}°F equivale a ${celsius.toFixed(2)}°C`;
});

botonConvertirCelsius.addEventListener("click", function () {
    const celsiusTexto = entradaCelsius.value.trim();

    if (celsiusTexto === "") {
        salidaResultadoCelsius.textContent = "Ingresa una temperatura en Celsius.";
        return;
    }

    const celsius = Number(celsiusTexto);

    if (!Number.isFinite(celsius)) {
        salidaResultadoCelsius.textContent = "Ingresa una temperatura válida.";
        return;
    }

    const fahrenheit = celsius * (9 / 5) + 32;
    salidaResultadoCelsius.textContent =
        `${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`;
});*/
