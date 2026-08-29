// ============================================================
// FPSCALCULATOR - SCRIPT PRINCIPAL
// ============================================================

// =========================
// JUEGOS
// =========================

const games = [
    {
        name: "Fortnite",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1665460/header.jpg",
        performance: 1.30
    },
    {
        name: "Grand Theft Auto V",
        genre: "Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        performance: 1.10
    },
    {
        name: "Grand Theft Auto V Enhanced",
        genre: "Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/3240220/header.jpg",
        performance: 0.80
    },
    {
        name: "Red Dead Redemption 2",
        genre: "Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
        performance: 0.70
    },
    {
        name: "Cyberpunk 2077",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        performance: 0.65
    },
    {
        name: "Minecraft",
        genre: "Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg",
        performance: 1.40
    },
    {
        name: "Counter-Strike 2",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        performance: 1.45
    },
    {
        name: "VALORANT",
        genre: "FPS",
        image: "https://placehold.co/600x338/111111/ff3030?text=VALORANT",
        performance: 1.60
    },
    {
        name: "Apex Legends",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
        performance: 1.05
    },
    {
        name: "Call of Duty Warzone",
        genre: "FPS / Battle Royale",
        image: "https://placehold.co/600x338/111111/ff3030?text=WARZONE",
        performance: 0.82
    },
    {
        name: "Rocket League",
        genre: "Deportes",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
        performance: 1.60
    },
    {
        name: "EA Sports FC 25",
        genre: "Fútbol",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",
        performance: 1.30
    },
    {
        name: "EA Sports FC 26",
        genre: "Fútbol",
        image: "https://placehold.co/600x338/111111/ff3030?text=EA+FC+26",
        performance: 1.20
    },
    {
        name: "Forza Horizon 5",
        genre: "Carreras",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
        performance: 0.85
    },
    {
        name: "Forza Motorsport",
        genre: "Carreras",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2440510/header.jpg",
        performance: 0.75
    },
    {
        name: "BeamNG.drive",
        genre: "Simulación",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg",
        performance: 0.70
    },
    {
        name: "Rust",
        genre: "Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
        performance: 0.75
    },
    {
        name: "The Forest",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg",
        performance: 0.90
    },
    {
        name: "Sons of the Forest",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg",
        performance: 0.65
    },
    {
        name: "Phasmophobia",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg",
        performance: 1.10
    },
    {
        name: "Dead by Daylight",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg",
        performance: 1.00
    },
    {
        name: "PUBG",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        performance: 0.95
    },
    {
        name: "Overwatch 2",
        genre: "FPS",
        image: "https://placehold.co/600x338/111111/ff3030?text=OVERWATCH+2",
        performance: 1.30
    },
    {
        name: "Rainbow Six Siege",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg",
        performance: 1.35
    },
    {
        name: "The Witcher 3",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        performance: 0.85
    },
    {
        name: "Hogwarts Legacy",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        performance: 0.65
    },
    {
        name: "Elden Ring",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        performance: 0.75
    },
    {
        name: "Starfield",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
        performance: 0.55
    },
    {
        name: "Battlefield 2042",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg",
        performance: 0.75
    },
    {
        name: "The Finals",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2073850/header.jpg",
        performance: 0.85
    },
    {
        name: "Destiny 2",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg",
        performance: 1.00
    },
    {
        name: "Dying Light 2",
        genre: "Acción / Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg",
        performance: 0.65
    },
    {
        name: "Assassin's Creed Valhalla",
        genre: "Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        performance: 0.70
    },
    {
        name: "Assassin's Creed Mirage",
        genre: "Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/3035570/header.jpg",
        performance: 0.75
    },
    {
        name: "Far Cry 6",
        genre: "FPS / Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg",
        performance: 0.75
    },
    {
        name: "Horizon Zero Dawn",
        genre: "Acción / RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg",
        performance: 0.80
    },
    {
        name: "Horizon Forbidden West",
        genre: "Acción / RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/header.jpg",
        performance: 0.65
    },
    {
        name: "God of War",
        genre: "Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
        performance: 0.75
    },
    {
        name: "God of War Ragnarök",
        genre: "Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg",
        performance: 0.65
    },
    {
        name: "Marvel Rivals",
        genre: "FPS / Acción",
        image: "https://placehold.co/600x338/111111/ff3030?text=MARVEL+RIVALS",
        performance: 0.75
    },
    {
        name: "Palworld",
        genre: "Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg",
        performance: 0.70
    },
    {
        name: "ARK: Survival Ascended",
        genre: "Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2399830/header.jpg",
        performance: 0.45
    },
    {
        name: "Euro Truck Simulator 2",
        genre: "Simulación",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg",
        performance: 1.25
    },
    {
        name: "American Truck Simulator",
        genre: "Simulación",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/270880/header.jpg",
        performance: 1.20
    },
    {
        name: "Garry's Mod",
        genre: "Sandbox",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg",
        performance: 1.35
    },
    {
        name: "Terraria",
        genre: "Sandbox",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
        performance: 1.80
    },
    {
        name: "Lethal Company",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg",
        performance: 1.20
    },
    {
        name: "Left 4 Dead 2",
        genre: "FPS / Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg",
        performance: 1.70
    },
    {
        name: "Grand Theft Auto IV",
        genre: "Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/header.jpg",
        performance: 0.90
    },
    {
        name: "Fallout 4",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg",
        performance: 0.90
    },
    {
        name: "Resident Evil 4",
        genre: "Terror / Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
        performance: 0.75
    }
];


// =========================
// PROCESADORES
// =========================

const cpus = [

    // INTEL CORE i3
    "Intel Core i3-8100",
    "Intel Core i3-9100F",
    "Intel Core i3-10100",
    "Intel Core i3-10100F",
    "Intel Core i3-12100",
    "Intel Core i3-12100F",
    "Intel Core i3-13100",
    "Intel Core i3-13100F",
    "Intel Core i3-14100",
    "Intel Core i3-14100F",

    // INTEL CORE i5
    "Intel Core i5-8400",
    "Intel Core i5-8500",
    "Intel Core i5-8600K",
    "Intel Core i5-9400F",
    "Intel Core i5-9600K",
    "Intel Core i5-10400",
    "Intel Core i5-10400F",
    "Intel Core i5-10600K",
    "Intel Core i5-11400",
    "Intel Core i5-11400F",
    "Intel Core i5-11600K",
    "Intel Core i5-12400",
    "Intel Core i5-12400F",
    "Intel Core i5-12600K",
    "Intel Core i5-13400",
    "Intel Core i5-13400F",
    "Intel Core i5-13600K",
    "Intel Core i5-14400",
    "Intel Core i5-14400F",
    "Intel Core i5-14600K",

    // INTEL CORE i7
    "Intel Core i7-8700",
    "Intel Core i7-8700K",
    "Intel Core i7-9700K",
    "Intel Core i7-10700",
    "Intel Core i7-10700K",
    "Intel Core i7-11700",
    "Intel Core i7-11700K",
    "Intel Core i7-12700",
    "Intel Core i7-12700K",
    "Intel Core i7-13700",
    "Intel Core i7-13700K",
    "Intel Core i7-14700",
    "Intel Core i7-14700K",

    // INTEL CORE i9
    "Intel Core i9-9900K",
    "Intel Core i9-10900K",
    "Intel Core i9-11900K",
    "Intel Core i9-12900K",
    "Intel Core i9-13900K",
    "Intel Core i9-14900K",

    // AMD RYZEN 3
    "AMD Ryzen 3 1200",
    "AMD Ryzen 3 2200G",
    "AMD Ryzen 3 3100",
    "AMD Ryzen 3 3300X",
    "AMD Ryzen 3 4100",
    "AMD Ryzen 3 4300G",
    "AMD Ryzen 3 5300G",

    // AMD RYZEN 5
    "AMD Ryzen 5 1600",
    "AMD Ryzen 5 1600 AF",
    "AMD Ryzen 5 2600",
    "AMD Ryzen 5 2600X",
    "AMD Ryzen 5 3600",
    "AMD Ryzen 5 3600X",
    "AMD Ryzen 5 4500",
    "AMD Ryzen 5 4600G",
    "AMD Ryzen 5 5500",
    "AMD Ryzen 5 5500GT",
    "AMD Ryzen 5 5600",
    "AMD Ryzen 5 5600G",
    "AMD Ryzen 5 5600X",
    "AMD Ryzen 5 5700G",
    "AMD Ryzen 5 7600",
    "AMD Ryzen 5 7600X",
    "AMD Ryzen 5 8400F",
    "AMD Ryzen 5 8500G",
    "AMD Ryzen 5 8600G",
    "AMD Ryzen 5 9600X",

    // AMD RYZEN 7
    "AMD Ryzen 7 1700",
    "AMD Ryzen 7 2700",
    "AMD Ryzen 7 2700X",
    "AMD Ryzen 7 3700X",
    "AMD Ryzen 7 3800X",
    "AMD Ryzen 7 5700X",
    "AMD Ryzen 7 5700G",
    "AMD Ryzen 7 5800X",
    "AMD Ryzen 7 5800X3D",
    "AMD Ryzen 7 7700",
    "AMD Ryzen 7 7700X",
    "AMD Ryzen 7 7800X3D",
    "AMD Ryzen 7 8700G",
    "AMD Ryzen 7 9700X",
    "AMD Ryzen 7 9800X3D",

    // AMD RYZEN 9
    "AMD Ryzen 9 3900X",
    "AMD Ryzen 9 3950X",
    "AMD Ryzen 9 5900X",
    "AMD Ryzen 9 5950X",
    "AMD Ryzen 9 7900",
    "AMD Ryzen 9 7900X",
    "AMD Ryzen 9 7950X",
    "AMD Ryzen 9 7950X3D",
    "AMD Ryzen 9 9900X",
    "AMD Ryzen 9 9950X",
    "AMD Ryzen 9 9950X3D"
];


// =========================
// TARJETAS GRÁFICAS
// =========================

const gpus = [

    // NVIDIA GTX 700
    "NVIDIA GTX 750",
    "NVIDIA GTX 750 Ti",
    "NVIDIA GTX 760",
    "NVIDIA GTX 770",
    "NVIDIA GTX 780",
    "NVIDIA GTX 780 Ti",

    // NVIDIA GTX 900
    "NVIDIA GTX 950",
    "NVIDIA GTX 960",
    "NVIDIA GTX 970",
    "NVIDIA GTX 980",
    "NVIDIA GTX 980 Ti",

    // NVIDIA GTX 1000
    "NVIDIA GTX 1050",
    "NVIDIA GTX 1050 Ti",
    "NVIDIA GTX 1060 3GB",
    "NVIDIA GTX 1060 6GB",
    "NVIDIA GTX 1070",
    "NVIDIA GTX 1070 Ti",
    "NVIDIA GTX 1080",
    "NVIDIA GTX 1080 Ti",

    // NVIDIA GTX 1600
    "NVIDIA GTX 1630",
    "NVIDIA GTX 1650",
    "NVIDIA GTX 1650 Super",
    "NVIDIA GTX 1660",
    "NVIDIA GTX 1660 Super",
    "NVIDIA GTX 1660 Ti",

    // NVIDIA RTX 2000
    "NVIDIA RTX 2060",
    "NVIDIA RTX 2060 Super",
    "NVIDIA RTX 2070",
    "NVIDIA RTX 2070 Super",
    "NVIDIA RTX 2080",
    "NVIDIA RTX 2080 Super",
    "NVIDIA RTX 2080 Ti",

    // NVIDIA RTX 3000
    "NVIDIA RTX 3050",
    "NVIDIA RTX 3060",
    "NVIDIA RTX 3060 Ti",
    "NVIDIA RTX 3070",
    "NVIDIA RTX 3070 Ti",
    "NVIDIA RTX 3080",
    "NVIDIA RTX 3080 Ti",
    "NVIDIA RTX 3090",
    "NVIDIA RTX 3090 Ti",

    // NVIDIA RTX 4000
    "NVIDIA RTX 4060",
    "NVIDIA RTX 4060 Ti",
    "NVIDIA RTX 4070",
    "NVIDIA RTX 4070 Super",
    "NVIDIA RTX 4070 Ti",
    "NVIDIA RTX 4070 Ti Super",
    "NVIDIA RTX 4080",
    "NVIDIA RTX 4080 Super",
    "NVIDIA RTX 4090",

    // NVIDIA RTX 5000
    "NVIDIA RTX 5060",
    "NVIDIA RTX 5060 Ti",
    "NVIDIA RTX 5070",
    "NVIDIA RTX 5070 Ti",
    "NVIDIA RTX 5080",
    "NVIDIA RTX 5090",

    // AMD RX 400
    "AMD RX 460",
    "AMD RX 470",
    "AMD RX 480",

    // AMD RX 500
    "AMD RX 550",
    "AMD RX 560",
    "AMD RX 570",
    "AMD RX 580",
    "AMD RX 590",

    // AMD VEGA
    "AMD Vega 3",
    "AMD Vega 6",
    "AMD Vega 7",
    "AMD Vega 8",
    "AMD Vega 10",
    "AMD Vega 11",

    // AMD RX 5000
    "AMD RX 5500 XT",
    "AMD RX 5600 XT",
    "AMD RX 5700",
    "AMD RX 5700 XT",

    // AMD RX 6000
    "AMD RX 6400",
    "AMD RX 6500 XT",
    "AMD RX 6600",
    "AMD RX 6600 XT",
    "AMD RX 6650 XT",
    "AMD RX 6700",
    "AMD RX 6700 XT",
    "AMD RX 6750 XT",
    "AMD RX 6800",
    "AMD RX 6800 XT",
    "AMD RX 6900 XT",
    "AMD RX 6950 XT",

    // AMD RX 7000
    "AMD RX 7600",
    "AMD RX 7600 XT",
    "AMD RX 7700 XT",
    "AMD RX 7800 XT",
    "AMD RX 7900 GRE",
    "AMD RX 7900 XT",
    "AMD RX 7900 XTX",

    // AMD RX 9000
    "AMD RX 9060 XT",
    "AMD RX 9070",
    "AMD RX 9070 XT",

    // INTEL
    "Intel UHD 610",
    "Intel UHD 620",
    "Intel UHD 630",
    "Intel UHD 730",
    "Intel UHD 750",
    "Intel UHD 770",
    "Intel Iris Xe",
    "Intel Arc A310",
    "Intel Arc A380",
    "Intel Arc A580",
    "Intel Arc A750",
    "Intel Arc A770",
    "Intel Arc B580"
];


// ============================================================
// ELEMENTOS DE LA PÁGINA
// ============================================================

const gameSelect = document.getElementById("game");
const cpuSelect = document.getElementById("cpu");
const gpuSelect = document.getElementById("gpu");

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");

const calculateButton =
    document.getElementById("calculateButton");


// ============================================================
// AÑADIR OPCIONES A SELECT
// ============================================================

function addOptions(select, items) {

    if (!select) {
        return;
    }

    select.innerHTML = "";

    items.forEach(function(item) {

        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        select.appendChild(option);

    });
}


// ============================================================
// CARGAR JUEGOS
// ============================================================

function loadGames() {

    if (!gamesGrid) {
        return;
    }

    gamesGrid.innerHTML = "";

    games.forEach(function(game) {

        const card = document.createElement("div");

        card.className = "game-card";

        card.dataset.game = game.name;

        card.innerHTML = `
            <img
                class="game-image"
                src="${game.image}"
                alt="${game.name}"
                loading="lazy"
                onerror="this.src='https://placehold.co/600x338/111111/ff3030?text=FPSCalculator'"
            >

            <div class="game-info">
                <strong>${game.name}</strong>
                <span>${game.genre}</span>
            </div>
        `;

        card.addEventListener("click", function() {

            selectGame(game.name);

        });

        gamesGrid.appendChild(card);

    });

}


// ============================================================
// SELECCIONAR JUEGO
// ============================================================

function selectGame(gameName) {

    if (gameSelect) {
        gameSelect.value = gameName;
    }

    document.querySelectorAll(".game-card").forEach(
        function(card) {

            card.classList.remove("selected");

            if (card.dataset.game === gameName) {

                card.classList.add("selected");

            }

        }
    );

}


// ============================================================
// BUSCADOR
// ============================================================

function filterGames() {

    if (!gameSearch) {
        return;
    }

    const search =
        gameSearch.value.toLowerCase().trim();

    document.querySelectorAll(".game-card").forEach(
        function(card) {

            const name =
                card.dataset.game.toLowerCase();

            if (name.includes(search)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        }
    );

}


// ============================================================
// POTENCIA GPU
// ============================================================

function getGpuPower(gpu) {

    const power = {

        "NVIDIA GTX 750": 12,
        "NVIDIA GTX 750 Ti": 15,
        "NVIDIA GTX 760": 20,
        "NVIDIA GTX 770": 25,
        "NVIDIA GTX 780": 30,
        "NVIDIA GTX 780 Ti": 33,

        "NVIDIA GTX 950": 20,
        "NVIDIA GTX 960": 25,
        "NVIDIA GTX 970": 35,
        "NVIDIA GTX 980": 40,
        "NVIDIA GTX 980 Ti": 45,

        "NVIDIA GTX 1050": 25,
        "NVIDIA GTX 1050 Ti": 30,
        "NVIDIA GTX 1060 3GB": 40,
        "NVIDIA GTX 1060 6GB": 45,
        "NVIDIA GTX 1070": 55,
        "NVIDIA GTX 1070 Ti": 60,
        "NVIDIA GTX 1080": 65,
        "NVIDIA GTX 1080 Ti": 75,

        "NVIDIA GTX 1630": 30,
        "NVIDIA GTX 1650": 40,
        "NVIDIA GTX 1650 Super": 45,
        "NVIDIA GTX 1660": 50,
        "NVIDIA GTX 1660 Super": 55,
        "NVIDIA GTX 1660 Ti": 58,

        "NVIDIA RTX 2060": 65,
        "NVIDIA RTX 2060 Super": 72,
        "NVIDIA RTX 2070": 78,
        "NVIDIA RTX 2070 Super": 85,
        "NVIDIA RTX 2080": 92,
        "NVIDIA RTX 2080 Super": 98,
        "NVIDIA RTX 2080 Ti": 105,

        "NVIDIA RTX 3050": 55,
        "NVIDIA RTX 3060": 70,
        "NVIDIA RTX 3060 Ti": 85,
        "NVIDIA RTX 3070": 95,
        "NVIDIA RTX 3070 Ti": 100,
        "NVIDIA RTX 3080": 115,
        "NVIDIA RTX 3080 Ti": 125,
        "NVIDIA RTX 3090": 130,
        "NVIDIA RTX 3090 Ti": 140,

        "NVIDIA RTX 4060": 75,
        "NVIDIA RTX 4060 Ti": 85,
        "NVIDIA RTX 4070": 105,
        "NVIDIA RTX 4070 Super": 115,
        "NVIDIA RTX 4070 Ti": 125,
        "NVIDIA RTX 4070 Ti Super": 135,
        "NVIDIA RTX 4080": 155,
        "NVIDIA RTX 4080 Super": 165,
        "NVIDIA RTX 4090": 200,

        "NVIDIA RTX 5060": 90,
        "NVIDIA RTX 5060 Ti": 100,
        "NVIDIA RTX 5070": 125,
        "NVIDIA RTX 5070 Ti": 145,
        "NVIDIA RTX 5080": 175,
        "NVIDIA RTX 5090": 230,

        "AMD RX 460": 15,
        "AMD RX 470": 25,
        "AMD RX 480": 30,

        "AMD RX 550": 15,
        "AMD RX 560": 20,
        "AMD RX 570": 32,
        "AMD RX 580": 38,
        "AMD RX 590": 42,

        "AMD RX 5500 XT": 48,
        "AMD RX 5600 XT": 58,
        "AMD RX 5700": 65,
        "AMD RX 5700 XT": 72,

        "AMD RX 6400": 30,
        "AMD RX 6500 XT": 38,
        "AMD RX 6600": 62,
        "AMD RX 6600 XT": 70,
        "AMD RX 6650 XT": 75,
        "AMD RX 6700": 78,
        "AMD RX 6700 XT": 88,
        "AMD RX 6750 XT": 93,
        "AMD RX 6800": 100,
        "AMD RX 6800 XT": 115,
        "AMD RX 6900 XT": 125,
        "AMD RX 6950 XT": 135,

        "AMD RX 7600": 70,
        "AMD RX 7600 XT": 78,
        "AMD RX 7700 XT": 95,
        "AMD RX 7800 XT": 110,
        "AMD RX 7900 GRE": 120,
        "AMD RX 7900 XT": 135,
        "AMD RX 7900 XTX": 155,

        "AMD RX 9060 XT": 105,
        "AMD RX 9070": 135,
        "AMD RX 9070 XT": 150,

        "AMD Vega 3": 8,
        "AMD Vega 6": 12,
        "AMD Vega 7": 15,
        "AMD Vega 8": 17,
        "AMD Vega 10": 20,
        "AMD Vega 11": 22,

        "Intel UHD 610": 7,
        "Intel UHD 620": 9,
        "Intel UHD 630": 10,
        "Intel UHD 730": 15,
        "Intel UHD 750": 17,
        "Intel UHD 770": 20,
        "Intel Iris Xe": 25,

        "Intel Arc A310": 35,
        "Intel Arc A380": 40,
        "Intel Arc A580": 65,
        "Intel Arc A750": 75,
        "Intel Arc A770": 82,
        "Intel Arc B580": 100

    };

    return power[gpu] || 50;

}


// ============================================================
// POTENCIA CPU
// ============================================================

function getCpuPower(cpu) {

    let power = 50;

    if (cpu.includes("i3")) {
        power = 45;
    }

    if (cpu.includes("i5")) {
        power = 65;
    }

    if (cpu.includes("i7")) {
        power = 80;
    }

    if (cpu.includes("i9")) {
        power = 95;
    }

    if (cpu.includes("Ryzen 3")) {
        power = 45;
    }

    if (cpu.includes("Ryzen 5")) {
        power = 65;
    }

    if (cpu.includes("Ryzen 7")) {
        power = 80;
    }

    if (cpu.includes("Ryzen 9")) {
        power = 95;
    }

    if (cpu.includes("X3D")) {
        power += 10;
    }

    if (cpu.includes("G")) {
        power -= 5;
    }

    return power;

}


// ============================================================
// OBTENER JUEGO
// ============================================================

function getSelectedGame() {

    const gameName =
        gameSelect ? gameSelect.value : games[0].name;

    return games.find(
        function(game) {
            return game.name === gameName;
        }
    ) || games[0];

}


// ============================================================
// CALCULADORA FPS
// ============================================================

function calculateFPS() {

    if (!gameSelect || !cpuSelect || !gpuSelect) {
        return;
    }

    const game =
        getSelectedGame();

    const cpu =
        cpuSelect.value;

    const gpu =
        gpuSelect.value;

    const resolutionElement =
        document.getElementById("resolution");

    const qualityElement =
        document.getElementById("quality");

    const resolution =
        resolutionElement
            ? resolutionElement.value
            : "1080p";

    const quality =
        qualityElement
            ? qualityElement.value
            : "high";

    const gpuPower =
        getGpuPower(gpu);

    const cpuPower =
        getCpuPower(cpu);

    let fps =
        gpuPower * 2.2;

    fps *= game.performance;

    const cpuFactor =
        Math.min(
            cpuPower / 60,
            1.30
        );

    fps *= cpuFactor;


    // =========================
    // RESOLUCIÓN
    // =========================

    if (
        resolution === "1440p" ||
        resolution === "2K"
    ) {
        fps *= 0.68;
    }

    if (
        resolution === "2160p" ||
        resolution === "4K"
    ) {
        fps *= 0.42;
    }


    // =========================
    // CALIDAD
    // =========================

    if (quality === "low") {
        fps *= 1.45;
    }

    if (quality === "medium") {
        fps *= 1.20;
    }

    if (quality === "high") {
        fps *= 1.00;
    }

    if (quality === "ultra") {
        fps *= 0.78;
    }


    // =========================
    // FPS FINALES
    // =========================

    fps =
        Math.max(
            5,
            Math.round(fps)
        );

    const onePercent =
        Math.max(
            1,
            Math.round(fps * 0.70)
        );


    // =========================
    // USO CPU / GPU
    // =========================

    let cpuUsage =
        Math.round(
            Math.min(
                100,
                45 +
                (gpuPower /
                    Math.max(cpuPower, 1)) *
                25
            )
        );

    let gpuUsage =
        Math.round(
            Math.min(
                99,
                70 +
                gpuPower / 5
            )
        );


    // =========================
    // CUELLO DE BOTELLA
    // =========================

    let bottleneck =
        "GPU";

    if (
        cpuPower <
        gpuPower * 0.65
    ) {

        bottleneck =
            "CPU";

        cpuUsage = 95;
        gpuUsage = 75;

    }


    // =========================
    // NIVEL DE RENDIMIENTO
    // =========================

    let performanceText =
        "Bajo";

    if (fps >= 144) {

        performanceText =
            "Excelente";

    }
    else if (fps >= 100) {

        performanceText =
            "Muy bueno";

    }
    else if (fps >= 60) {

        performanceText =
            "Bueno";

    }
    else if (fps >= 30) {

        performanceText =
            "Jugable";

    }


    // =========================
    // MOSTRAR RESULTADOS
    // =========================

    const fpsNumber =
        document.getElementById("fpsNumber");

    const averageFPS =
        document.getElementById("averageFPS");

    const onePercentElement =
        document.getElementById("onePercent");

    const cpuUsageElement =
        document.getElementById("cpuUsage");

    const gpuUsageElement =
        document.getElementById("gpuUsage");

    const performanceBadge =
        document.getElementById("performanceBadge");

    const bottleneckText =
        document.getElementById("bottleneckText");

    const resultDescription =
        document.getElementById("resultDescription");


    if (fpsNumber) {
        fpsNumber.textContent =
            fps + " FPS";
    }

    if (averageFPS) {
        averageFPS.textContent =
            fps + " FPS";
    }

    if (onePercentElement) {
        onePercentElement.textContent =
            onePercent + " FPS";
    }

    if (cpuUsageElement) {
        cpuUsageElement.textContent =
            cpuUsage + "%";
    }

    if (gpuUsageElement) {
        gpuUsageElement.textContent =
            gpuUsage + "%";
    }

    if (performanceBadge) {
        performanceBadge.textContent =
            performanceText;
    }

    if (bottleneckText) {
        bottleneckText.textContent =
            bottleneck;
    }

    if (resultDescription) {

        resultDescription.textContent =
            game.name +
            " • " +
            cpu +
            " • " +
            gpu +
            " • " +
            resolution +
            " • " +
            quality;

    }

}


// ============================================================
// COMPARADOR DE GPU
// ============================================================

function setupComparison() {

    const gpu1 =
        document.getElementById("compareGpu1");

    const gpu2 =
        document.getElementById("compareGpu2");

    if (!gpu1 || !gpu2) {
        return;
    }

    addOptions(
        gpu1,
        gpus
    );

    addOptions(
        gpu2,
        gpus
    );

    if (gpus.length > 1) {
        gpu2.selectedIndex = 1;
    }


    function compare() {

        const power1 =
            getGpuPower(
                gpu1.value
            );

        const power2 =
            getGpuPower(
                gpu2.value
            );

        const difference =
            Math.round(
                ((power1 - power2) /
                    power2) *
                100
            );

        const result =
            document.getElementById(
                "compareResult"
            );

        if (!result) {
            return;
        }

        if (difference > 0) {

            result.textContent =
                gpu1.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu2.value +
                ".";

        }
        else if (difference < 0) {

            result.textContent =
                gpu2.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu1.value +
                ".";

        }
        else {

            result.textContent =
                "Las dos gráficas tienen un rendimiento estimado similar.";

        }

    }


    gpu1.addEventListener(
        "change",
        compare
    );

    gpu2.addEventListener(
        "change",
        compare
    );

    compare();

}


// ============================================================
// CONTADORES
// ============================================================

function updateCounters() {

    const gameCount =
        document.getElementById(
            "gameCount"
        );

    const cpuCount =
        document.getElementById(
            "cpuCount"
        );

    const gpuCount =
        document.getElementById(
            "gpuCount"
        );


    if (gameCount) {

        gameCount.textContent =
            games.length;

    }

    if (cpuCount) {

        cpuCount.textContent =
            cpus.length;

    }

    if (gpuCount) {

        gpuCount.textContent =
            gpus.length;

    }

}


// ============================================================
// INICIO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Cargar juegos
        addOptions(
            gameSelect,
            games.map(
                function(game) {
                    return game.name;
                }
            )
        );


        // Cargar CPUs
        addOptions(
            cpuSelect,
            cpus
        );


        // Cargar GPUs
        addOptions(
            gpuSelect,
            gpus
        );


        // Crear tarjetas
        loadGames();


        // Contadores
        updateCounters();


        // Comparador
        setupComparison();


        // Buscador
        if (gameSearch) {

            gameSearch.addEventListener(
                "input",
                filterGames
            );

        }


        // Botón calcular
        if (calculateButton) {

            calculateButton.addEventListener(
                "click",
                calculateFPS
            );

        }


        // Calcular inicialmente
        calculateFPS();


        console.log(
            "================================="
        );

        console.log(
            "FPSCalculator iniciado"
        );

        console.log(
            "Juegos:",
            games.length
        );

        console.log(
            "CPUs:",
            cpus.length
        );

        console.log(
            "GPUs:",
            gpus.length
        );

        console.log(
            "================================="
        );

    }
);
