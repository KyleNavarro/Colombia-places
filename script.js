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
                ],
                "Monserrate":[
                    "/img/bogota/monserrate/2e5aea3b43046bdcdb7bf0bfcc74b78e.webp",
                    "/img/bogota/monserrate/6be2bc3224f637d6c34ba1d12ad06939.webp",
                    "/img/bogota/monserrate/9ab38d27ba1cda33435cfa6700ade94d.webp",
                    "/img/bogota/monserrate/18b6e5585180987afb7cb02da6eb5ef0.webp",
                    "/img/bogota/monserrate/114f6ae8650bf0fb014b8b9248802d4f.webp",
                    "/img/bogota/monserrate/b7da13714f3e1a406c0661a6ad8ec254.webp"
                ],
                "Museo de ORO":[
                    "/img/bogota/museo-oro/6ba2c9fe250316a610253c33dc7c26ca.webp",
                    "/img/bogota/museo-oro/458a0affe0fd176746b25aabdecc6c1c.webp",
                    "/img/bogota/museo-oro/d3f1aac48b77f956eb241e94abe88baf.webp",
                ],
                "Plaza de Bolivar":[
                    "/img/bogota/plaza-bolivar/8fdb854fc93016ff06627ea282c2ac5f.webp",
                    "/img/bogota/plaza-bolivar/31b5f73da9a496e07fc397aa672c8118.webp",
                    "/img/bogota/plaza-bolivar/3181248cb6d12603cb85afdd6615231b.webp",
                    "/img/bogota/plaza-bolivar/a5812c29cacbd8a00705699e577f96e2.webp",
                    "/img/bogota/plaza-bolivar/c5aaa5e6a3645de61df0ef0876974c87.webp"
                ]
        }
    },
    "medellin": {
        lugares: {
            "Comuna 13": [
                "/img/medellin/comuna-13/5f01e00c112098c3576dffc60c69b1f9.webp",
                "/img/medellin/comuna-13/17ada0b81c407e8f4a4e4818de722876.webp",
                "/img/medellin/comuna-13/37a1dc1a9d121d9daece0f8050fddefd.webp",
                "/img/medellin/comuna-13/730123549f736d764b0cbad89ffbd1d6.webp",
                "/img/medellin/comuna-13/b94ba938eef72b54e42fb0cadb740e3b.webp",
                "/img/medellin/comuna-13/e149da7809f104c7e8110d4480fdad96.webp"
            ],
            "Jardín Botánico": [
                "/img/medellin/jardin/unnamed.webp",
                "/img/medellin/jardin/unnamed (1).webp",
                "/img/medellin/jardin/unnamed (2).webp",
                "/img/medellin/jardin/unnamed (3).webp",
                "/img/medellin/jardin/unnamed (4).webp"
            ],
            "Parque Arví": [
                "/img/medellin/parque-arvi/3b3ddbd5adee6a473ac52b53a08c839a.webp",
                "/img/medellin/parque-arvi/67f80228959f76eb3c0ae8da205ee89e.webp",
                "/img/medellin/parque-arvi/8291a2c9e7b82a7238c09d2d6e02ce05.webp",
                "/img/medellin/parque-arvi/e96d189a25897c87e359d7d86fa5cdb4.webp"
            ],
            "Plaza de Botero":[
                "/img/medellin/plaza-botero/8381bdbd37bd165b5464ea6db6ad228b.webp",
                "/img/medellin/plaza-botero/24977e337a6a6a59f55994948cb794d1.webp",
                "/img/medellin/plaza-botero/234651063b5ff5c96cafee48b5e64f93.webp",
                "/img/medellin/plaza-botero/a57795384324e84a8d314438f38d569a.webp",
                "/img/medellin/plaza-botero/b792f87132133e76040c3a1bfa002097.webp"
            ],
            "Pueblito Paisa":[
                "/img/medellin/pueblito-paisa/169655dc7775163201ef11e296a090df.webp",
                "/img/medellin/pueblito-paisa/c7b897f2ba8352d04d09f9c8b332bcfe.webp",
                "/img/medellin/pueblito-paisa/e9e37693da35f83e4db531f42a22bd30.webp"
            ]
        }
    },
    "cali": {
        lugares: {
            "Boulevard del Río":[
                "/img/cali/Boulevard-del-Río/B5IF36PHZJBGTNEK5ZTDFLYZC4.webp",
                "/img/cali/Boulevard-del-Río/boulevar-1.webp",
                "/img/cali/Boulevard-del-Río/Bulevar_Del_Rio-1.webp",
                "/img/cali/Boulevard-del-Río/XKBSGMRM2JDZPP7AIMHZ7ZQH3M.webp"
            ],
            "Cristo Rey":[
                "/img/cali/cristorey/4a5d9ec7a28db856e0859798ba96efd6.webp",
                "/img/cali/cristorey/b8febb5e4fdd788417c44c70b850fd18.webp",
                "/img/cali/cristorey/cf14db68369ef145981a68b2519cfd48.webp"
            ],
           "Iglesia Ermita":[
                "/img/cali/iglesia-ermita/6ab2655b4e689fc6259004333c9d59db.webp",
                "/img/cali/iglesia-ermita/iglesia-ermita-cali_98.webp",
                "/img/cali/iglesia-ermita/La_Ermita_es_de_los_Caleños.webp"
           ] ,
           "Zoológico":[
                "/img/cali/zoologico/9a4cffbc7f1b3780269c0246b6b6f195.webp",
                "/img/cali/zoologico/unnamed.webp",
                "/img/cali/zoologico/unnamed (1).webp",
                "/img/cali/zoologico/unnamed (2).webp",
                "/img/cali/zoologico/unnamed (3).webp"
           ]
        }
    },
    "bucaramanga": {
        lugares: {
            "Cerro del Santísimo": [
                "/img/bucaramanga/Cerro-del-Santísimo/unnamed.webp",
                "/img/bucaramanga/Cerro-del-Santísimo/unnamed (1).webp",
                "/img/bucaramanga/Cerro-del-Santísimo/unnamed (2).webp",
                "/img/bucaramanga/Cerro-del-Santísimo/unnamed (6).webp"
            ],
            "Parque Nacional del Chicamocha":[
                "/img/bucaramanga/chicamocha/unnamed.webp",
                "/img/bucaramanga/chicamocha/unnamed (1).webp",
                "/img/bucaramanga/chicamocha/unnamed (2).webp",
                "/img/bucaramanga/chicamocha/unnamed (3).webp",
                "/img/bucaramanga/chicamocha/unnamed (4).webp",
                "/img/bucaramanga/chicamocha/unnamed (5).webp"
            ],
            "Jardin Botánico":[
                "/img/bucaramanga/jardin-botanico/unnamed.webp",
                "/img/bucaramanga/jardin-botanico/unnamed (1).webp",
                "/img/bucaramanga/jardin-botanico/unnamed (2).webp",
                "/img/bucaramanga/jardin-botanico/unnamed (3).webp",
                "/img/bucaramanga/jardin-botanico/unnamed (4).webp"
            ]
        }
    },
    "barranquilla": {
        lugares: {
            "Bocas de Ceniza": [
                "/img/barranquilla/bocas-de-ceniza/17d70559d087c9db975fcec6d5242d35.webp",            
                "/img/barranquilla/bocas-de-ceniza/80a236c4562421b6e400690236587908.webp",            
                "/img/barranquilla/bocas-de-ceniza/184a35ecc91715c41c0599d5d475ee44.webp"          
            ],
            "Carnaval de Barranquilla":[
                "/img/barranquilla/carnaval-de-barranquilla/0b3d3e25244e45c08a706ce9bed25e1e.webp",            
                "/img/barranquilla/carnaval-de-barranquilla/6c7096703ca07acda6d673eee4c31a50.webp",            
                "/img/barranquilla/carnaval-de-barranquilla/876f7097aa0a1b8f52d346cd3c24cc0b.webp",            
                "/img/barranquilla/carnaval-de-barranquilla/c509251dbf58d22755593788e75b1843.webp"          
            ],
            "Gran Malecon dle Río":[
                "/img/barranquilla/gran-malecon-del-rio/8398cfb8c4c8bdcde621610d155ba1a5.webp",            
                "/img/barranquilla/gran-malecon-del-rio/bffdceeab1c77d10a34b066777f72049.webp",            
                "/img/barranquilla/gran-malecon-del-rio/fb2bff74fef1409a01f084bfb0ce86b1.webp"            
            ],
            "Museo del Caribe":[
                "/img/barranquilla/museo/4b535724e173d94fe028457c4ebe24ea.webp",            
                "/img/barranquilla/museo/5532b72675d9e929f4d221ad83263b96.webp",            
                "/img/barranquilla/museo/f1c2b2f1e8b161addef6a548ccfa2508.webp"            
            ],
            "Plaza del Paz":[
                "/img/barranquilla/plaza-de-la-paz/1e54cb69d31d47afcf04c1b1fbeaac68.webp",            
                "/img/barranquilla/plaza-de-la-paz/41dd604a63f03e57038e0fa5f5674876.webp",            
                "/img/barranquilla/plaza-de-la-paz/c6de33fbce84c95740b885bbb81009bd.webp",            
                "/img/barranquilla/plaza-de-la-paz/e2b3d9197619a9af15e1d9dfdc15e26c.webp"            
            ]
        }
    },
    "cartagena": {
        lugares: {
            "Ciudad Amurallada": [
                "/img/cartagena/ciudad-amurallada/33874aa95911bfdeabce134189bb4eeb.webp",            
                "/img/cartagena/ciudad-amurallada/52560c66806f777f726271110b2968d4.webp",            
                "/img/cartagena/ciudad-amurallada/ac390d12d2b62cebac046952808f7998.webp",            
                "/img/cartagena/ciudad-amurallada/ba93e2b5c0fc93d69a00a638d66778d2.webp",           
                "/img/cartagena/ciudad-amurallada/vefy3z2imq751.webp"            
            ],
            "Castillo de San Felipe de Barajas":[
                "/img/cartagena/castillo/unnamed.webp",            
                "/img/cartagena/castillo/unnamed (1).webp",            
                "/img/cartagena/castillo/unnamed (2).webp",            
                "/img/cartagena/castillo/unnamed (3).webp",            
                "/img/cartagena/castillo/unnamed (4).webp"           
            ],
            "Getsemaní":[
                "/img/cartagena/Getsemaní/1e4fffd38421f756e994a35680c66139.webp",            
                "/img/cartagena/Getsemaní/9e7f1f4960ea5e07bed1852b072e8b8c.webp",            
                "/img/cartagena/Getsemaní/78c28a34bdcc0e3a2381b61162edbd39.webp",            
                "/img/cartagena/Getsemaní/93d4ddbe492def9af398d6283afc3498.webp",            
                "/img/cartagena/Getsemaní/132df6899f67de35dc74a817188a0973.webp"            
            ],
            "Islas del Rosario":[
                "/img/cartagena/islas-rosario/3licensed-image.webp",            
                "/img/cartagena/islas-rosario/acf897f91edc59dd833992864976140b.webp",            
                "/img/cartagena/islas-rosario/ae9c2a887e2ab29c0a4b95928442bb0b.webp",            
                "/img/cartagena/islas-rosario/licensed-image.webp",            
                "/img/cartagena/islas-rosario/licensed-image2.webp",            
                "/img/cartagena/islas-rosario/licensed-image4.webp"            
            ],
            "Playa Blanca":[
                "/img/cartagena/playa-blanca/6b4201196975aa6333ffeabbc3a786db.webp",            
                "/img/cartagena/playa-blanca/50ef600dde57d39b83809e0b99afb111.webp",           
                "/img/cartagena/playa-blanca/97bf1fb15cca645cfca18cde966215a5.webp",           
                "/img/cartagena/playa-blanca/245f1fea8c08798628de5a7961aa7c6b.webp"            
            ]
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

