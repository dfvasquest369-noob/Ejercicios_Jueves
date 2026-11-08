/*const $ = id => document.getElementById(id);

$("nom").onfocus=()=>$("m-nom").textContent="(Min. 3 letras)";
$("nom").oninput=()=>$("m-nom").textContent=`(${$("nom").value.length}letras)`;
$("nom").onblur=()=>$("m-nom").textContent=$("nom").value.length>=3?"✅":"❌ Muy corto";

$("edad").onfocus=()=>$("m-edad").textContent="(Debe ser mayor a 0)";
$("edad").oninput=()=>$("m-edad").textContent=$("edad").value<0?"❌ Negativo":"...";
$("edad").onblur=()=>$("m-edad").textContent=$("edad").value<0?"✅":"❌ Invalido";

$(mod).onchange=()=>$("m-mod").textContent=$("mod").value?"✅":"❌ Elige una";

$("correo").onfocus=()=>$("m-correo").textContent="(Requiere @)";
$("correo").onblur=()=>$("m-correo").textContent=$("correo").value.includes("@")?"✅":"❌ falta @";

$("form").onsubmit = (e) => {
    e.preventDefault();

    $("res").textContent = `Registrado: ${$("nom").value} | ${$("edad").value} años | ${$("mod").value} | ${$("correo").value}`;
    e.target.reset();

    ["m-nom", "m-edad", "m-mod", "m-correo"].forEach(id => $(id).textContent = "");
};*/

/*const $ = id => document.getElementById(id);

$("nom").onfocus = () => $("m-nom").textContent = " (Mín. 3 letras)";
$("nom").oninput = () => $("m-nom").textContent = ` (${$("nom").value.length} letras)`;
$("nom").onblur  = () => $("m-nom").textContent = $("nom").value.length >= 3 ? " ✅" : " ❌ Muy corto";

$("edad").onfocus = () => $("m-edad").textContent = " (Debe ser mayor a 0)";
$("edad").oninput = () => $("m-edad").textContent = $("edad").value < 0 ? " ❌ Negativo" : " ...";
$("edad").onblur  = () => $("m-edad").textContent = $("edad").value > 0 ? " ✅" : " ❌ Inválido";

$("mod").onchange = () => $("m-mod").textContent = $("mod").value ? " ✅" : " ❌ Elige una";

const recomendaciones = {
    "Principiante": "Clases básicas e introductorias.",
    "Intermedio": "Talleres prácticos y proyectos guiados.",
    "Avanzado": "Proyectos complejos y mentorías."
};

$("nivel").onchange = () => {
    const valor = $("nivel").value;
    $("m-nivel").textContent = valor ? ` ✅ Recomendación: ${recomendaciones[valor]}` : " ❌ Elige un nivel";
};

$("correo").onfocus = () => $("m-correo").textContent = " (Requiere @)";
$("correo").onblur  = () => $("m-correo").textContent = $("correo").value.includes("@") ? " ✅" : " ❌ Falta @";

$("form").onsubmit = (e) => {
    e.preventDefault(); 
    
    if (!$("nom").value || !$("edad").value || !$("mod").value || !$("nivel").value || !$("correo").value) {
        $("res").textContent = "❌ Error: Faltan campos por completar. Revisa el formulario.";
        return; 
    }

    $("res").textContent = `Registrado: ${$("nom").value} | ${$("edad").value} años | ${$("mod").value} | Nivel: ${$("nivel").value} | ${$("correo").value}`;
    
    e.target.reset(); 
    
    ["m-nom", "m-edad", "m-mod", "m-nivel", "m-correo"].forEach(id => $(id).textContent = "");
};*/

const $ = id => document.getElementById(id);


$("nom").onfocus = () => $("m-nom").textContent = " (Mín. 3 letras)";

$("nom").oninput = () => $("m-nom").textContent = `Participante: ${$("nom").value} | ${$("nom").value.length} caracteres`;

$("nom").onblur  = () => {
    
    if ($("nom").value !== "") {
        $("m-nom").textContent = $("nom").value.length >= 3 ? " ✅" : " ❌ Muy corto";
    }
};

$("edad").onfocus = () => $("m-edad").textContent = " (Debe ser mayor a 0)";
$("edad").oninput = () => $("m-edad").textContent = $("edad").value < 0 ? " ❌ Negativo" : " ...";
$("edad").onblur  = () => $("m-edad").textContent = $("edad").value > 0 ? " ✅" : " ❌ Inválido";

$("mod").onchange = () => $("m-mod").textContent = $("mod").value ? " ✅" : " ❌ Elige una";

const recomendaciones = {
    "Principiante": "Clases básicas e introductorias.",
    "Intermedio": "Talleres prácticos y proyectos guiados.",
    "Avanzado": "Proyectos complejos y mentorías."
};

$("nivel").onchange = () => {
    const valor = $("nivel").value;
    $("m-nivel").textContent = valor ? ` ✅ Recomendación: ${recomendaciones[valor]}` : " ❌ Elige un nivel";
};

$("correo").onfocus = () => $("m-correo").textContent = " (Requiere @)";
$("correo").onblur  = () => $("m-correo").textContent = $("correo").value.includes("@") ? " ✅" : " ❌ Falta @";

$("form").onsubmit = (e) => {
    e.preventDefault(); 
    
    if (!$("nom").value || !$("edad").value || !$("mod").value || !$("nivel").value || !$("correo").value) {
        $("res").textContent = "❌ Error: Faltan campos por completar. Revisa el formulario.";
        return; 
    }

    $("res").textContent = `Registrado: ${$("nom").value} | ${$("edad").value} años | ${$("mod").value} | Nivel: ${$("nivel").value} | ${$("correo").value}`;
    
    e.target.reset(); 
    ["m-nom", "m-edad", "m-mod", "m-nivel", "m-correo"].forEach(id => $(id).textContent = "");
};



