const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        btn.textContent = 'Modo Claro';
    }else{
        btn.textContent = 'Modo Oscuro';
    }
});




//modal
// Datos de las ciudades y sus lugares
const datosCiudades = {
    "bogotá": {
        lugares: {
            "Jardin Botánico": 
                ["/img/bogota/jardin-botanico/754d0656ab1f3b9416f9577f7fcff2b4.jpgwebp.webp",
                    "/img/bogota/jardin-botanico/908f9ab27ab08e6fe27e4c64be772d71.webp",
                    "/img/bogota/jardin-botanico/7174705dd93f951860a36f69daf51655.webp",
                    "/img/bogota/jardin-botanico/db546e5127652340325d286806a4e619.webp" ],
                    
                "La Candelaria": 
                    ["/img/bogota/la-candelaria/6e.webp",
                        "/img/bogota/la-candelaria/189ba3b3c6b149a8d0bbc9daed3dda2e.webp",
                        "/img/bogota/la-candelaria/caption.webp",
                        "/img/bogota/la-candelaria/caption2.webp",
                        "/img/bogota/la-candelaria/cc9e0ddd8dd6a1fe861847b0a774616d.webp",
                        "/img/bogota/la-candelaria/d7.webp"  
                ]
        }
    },
    "medellin": {
        lugares: {
            "Comuna 13": ["/img/medellin/comuna13/img1.webp", "/img/medellin/comuna13/img2.webp"],
            "Jardín Botánico": ["/img/medellin/jardin-botanico/img1.webp", "/img/medellin/jardin-botanico/img2.webp"]
        }
    },
    "cali": {
        lugares: {
            "Cristo Rey": ["/img/cali/cristo-rey/img1.webp", "/img/cali/cristo-rey/img2.webp"],
            "Zoológico de Cali": ["/img/cali/zoologico/img1.webp", "/img/cali/zoologico/img2.webp"]
        }
    },
    "bucaramanga": {
        lugares: {
            "Parque Nacional del Chicamocha": ["/img/bucaramanga/chicamocha/img1.webp", "/img/bucaramanga/chicamocha/img2.webp"],
            "Catedral de la Sagrada Familia": ["/img/bucaramanga/catedral/img1.webp", "/img/bucaramanga/catedral/img2.webp"]
        }
    },
    "barranquilla": {
        lugares: {
            "Bocas de Ceniza": ["/img/barranquilla/bocas-de-ceniza/img1.webp", "/img/barranquilla/bocas-de-ceniza/img2.webp"],
            "Gran Malecón": ["/img/barranquilla/gran-malecon/img1.webp", "/img/barranquilla/gran-malecon/img2.webp"]
        }
    },
    "cartagena": {
        lugares: {
            "Ciudad Amurallada": ["/img/cartagena/ciudad-amurallada/img1.webp", "/img/cartagena/ciudad-amurallada/img2.webp"],
            "Castillo San Felipe": ["/img/cartagena/castillo-san-felipe/img1.webp", "/img/cartagena/castillo-san-felipe/img2.webp"]
        }
    }
};

// Elementos del modal
const modal = document.getElementById("modal");
const cerrar = document.querySelector(".cerrar");
const vistaLugares = document.getElementById("vistaLugares");
const vistaGaleria = document.getElementById("vistaGaleria");
const tituloCiudad = document.getElementById("tituloCiudad");
const listaLugares = document.getElementById("listaLugares");
const tituloLugar = document.getElementById("tituloLugar");
const contenedorImagenes = document.getElementById("contenedorImagenes");
const volverLugares = document.getElementById("volverLugares");

// Abrir modal al hacer clic en una ciudad
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", e => {
        e.preventDefault();
        const ciudad = card.querySelector(".city-name").textContent.trim().toLowerCase();

        if (datosCiudades[ciudad]) {
            tituloCiudad.textContent = `Lugares a visitar en ${card.querySelector(".city-name").textContent}`;
            listaLugares.innerHTML = "";

            for (let lugar in datosCiudades[ciudad].lugares) {
                const li = document.createElement("li");
                li.textContent = lugar;
                li.dataset.lugar = lugar;
                li.dataset.ciudad = ciudad;
                listaLugares.appendChild(li);
            }

            modal.style.display = "block";
            vistaLugares.style.display = "block";
            vistaGaleria.style.display = "none";
        }
    });
});

// Mostrar galería al seleccionar un lugar
listaLugares.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        const ciudad = e.target.dataset.ciudad;
        const lugar = e.target.dataset.lugar;

        tituloLugar.textContent = lugar;
        contenedorImagenes.innerHTML = "";

        datosCiudades[ciudad].lugares[lugar].forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            contenedorImagenes.appendChild(img);
        });

        vistaLugares.style.display = "none";
        vistaGaleria.style.display = "block";
    }
});

// Volver a la lista de lugares
volverLugares.addEventListener("click", () => {
    vistaGaleria.style.display = "none";
    vistaLugares.style.display = "block";
});

// Cerrar modal
cerrar.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

