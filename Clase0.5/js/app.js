const selectorGustos = document.getElementById("gustos");
const descripcionGusto = document.getElementById("descripcion-gusto");
const imagenGusto = document.getElementById("imagen-gusto");
const numeroFavorito = document.getElementById("numero-favorito");
const numeroFavoritoTexto = document.getElementById("numero-favorito-texto");

const gustos = {
	deporte: {
		descripcion: "Disfruto el fútbol y la emoción de cada partido.",
		imagen: "https://www.shutterstock.com/editorial/image-editorial/O2D6U614M9TfAe33ODIyNw==/final-whistle-kaka-ac-milan-slumps-his-1500w-8493376bo.jpg",
		textoAlternativo: "KAKA Celebrando"
	},
	dibujar: {
		descripcion: "Me gusta expresarme creando dibujos en papel y en formato digital.",
		imagen: "https://cdn.cosmicjs.com/d72f9e30-51c6-11ed-89d4-853fd6bb9a28-Horizontes.jpg",
		textoAlternativo: "Horizontes"
	},
	leer: {
		descripcion: "Disfruto leer literatura y cómics, y descubrir las historias que cuentan.",
		imagen: "https://static.wikia.nocookie.net/spiderman/images/5/50/Spider-Man_Vol_1_1.png/revision/latest?cb=20190421161408&path-prefix=es",
		textoAlternativo: "Spider-Man Primer tomo"
	},
	musica: {
		descripcion: "Me gusta escuchar hip-hop y seguir el ritmo de sus beats.",
		imagen: "https://i.ebayimg.com/images/g/mzIAAOSw0itjDcBg/s-l1600.webp",
		textoAlternativo: "Busta Rymes 1996"
	},
	cine: {
		descripcion: "Disfruto las películas de arte, comedia y acción; cada género tiene algo especial.",
		imagen: "https://calac.rice.edu/sites/default/files/movie-posters/maria%20llena%20eres%20de%20gracia.jpg",
		textoAlternativo: "Maria llena eres de gracia"
	}
};

selectorGustos.addEventListener("change", () => {
	const gusto = gustos[selectorGustos.value];
	descripcionGusto.textContent = gusto?.descripcion || "";
	imagenGusto.hidden = !gusto;
	imagenGusto.src = gusto?.imagen || "";
	imagenGusto.alt = gusto?.textoAlternativo || "";
});

if (numeroFavorito && numeroFavoritoTexto) {
	numeroFavorito.addEventListener("input", () => {
		numeroFavoritoTexto.textContent = `Mi número favorito es: ${numeroFavorito.value}`;
	});
}


