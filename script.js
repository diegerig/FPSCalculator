```javascript
// ============================================================
// FPSCALCULATOR - SCRIPT COMPLETO
// ============================================================

const API_URL = "https://fpscalculator-api.onrender.com";

// ============================================================
// JUEGOS
// ============================================================

const games = [
    { name: "Fortnite", genre: "Battle Royale", performance: 1.30 },
    { name: "Grand Theft Auto V", genre: "Mundo abierto", performance: 1.10 },
    { name: "Grand Theft Auto V Enhanced", genre: "Mundo abierto", performance: 0.80 },
    { name: "Red Dead Redemption 2", genre: "Mundo abierto", performance: 0.70 },
    { name: "Cyberpunk 2077", genre: "RPG", performance: 0.65 },
    { name: "Minecraft", genre: "Supervivencia", performance: 1.40 },
    { name: "Counter-Strike 2", genre: "FPS", performance: 1.45 },
    { name: "VALORANT", genre: "FPS", performance: 1.60 },
    { name: "Apex Legends", genre: "Battle Royale", performance: 1.05 },
    { name: "Call of Duty Warzone", genre: "FPS / Battle Royale", performance: 0.82 },
    { name: "Rocket League", genre: "Deportes", performance: 1.60 },
    { name: "EA Sports FC 25", genre: "Fútbol", performance: 1.30 },
    { name: "EA Sports FC 26", genre: "Fútbol", performance: 1.20 },
    { name: "Forza Horizon 5", genre: "Carreras", performance: 0.85 },
    { name: "Forza Motorsport", genre: "Carreras", performance: 0.75 },
    { name: "BeamNG.drive", genre: "Simulación", performance: 0.70 },
    { name: "Rust", genre: "Supervivencia", performance: 0.75 },
    { name: "The Forest", genre: "Terror", performance: 0.90 },
    { name: "Sons of the Forest", genre: "Terror", performance: 0.65 },
    { name: "Phasmophobia", genre: "Terror", performance: 1.10 },
    { name: "Dead by Daylight", genre: "Terror", performance: 1.00 },
    { name: "PUBG", genre: "Battle Royale", performance: 0.95 },
    { name: "Overwatch 2", genre: "FPS", performance: 1.30 },
    { name: "Rainbow Six Siege", genre: "FPS", performance: 1.35 },
    { name: "The Witcher 3", genre: "RPG", performance: 0.85 },
    { name: "Hogwarts Legacy", genre: "RPG", performance: 0.65 },
    { name: "Elden Ring", genre: "RPG", performance: 0.75 },
    { name: "Starfield", genre: "RPG", performance: 0.55 },
    { name: "Battlefield 2042", genre: "FPS", performance: 0.75 },
    { name: "The Finals", genre: "FPS", performance: 0.85 },
    { name: "Destiny 2", genre: "FPS", performance: 1.00 },
    { name: "Dying Light 2", genre: "Acción / Terror", performance: 0.65 },
    { name: "Assassin's Creed Valhalla", genre: "Acción", performance: 0.70 },
    { name: "Assassin's Creed Mirage", genre: "Acción", performance: 0.75 },
    { name: "Far Cry 6", genre: "FPS / Acción", performance: 0.75 },
    { name: "Horizon Zero Dawn", genre: "Acción / RPG", performance: 0.80 },
    { name: "Horizon Forbidden West", genre: "Acción / RPG", performance: 0.65 },
    { name: "God of War", genre: "Acción", performance: 0.75 },
    { name: "God of War Ragnarök", genre: "Acción", performance: 0.65 },
    { name: "Marvel Rivals", genre: "FPS / Acción", performance: 0.75 },
    { name: "Palworld", genre: "Supervivencia", performance: 0.70 },
    { name: "ARK: Survival Ascended", genre: "Supervivencia", performance: 0.45 },
    { name: "Euro Truck Simulator 2", genre: "Simulación", performance: 1.25 },
    { name: "American Truck Simulator", genre: "Simulación", performance: 1.20 },
    { name: "Garry's Mod", genre: "Sandbox", performance: 1.35 },
    { name: "Terraria", genre: "Sandbox", performance: 1.80 },
    { name: "Lethal Company", genre: "Terror", performance: 1.20 },
    { name: "Left 4 Dead 2", genre: "FPS / Terror", performance: 1.70 },
    { name: "Grand Theft Auto IV", genre: "Mundo abierto", performance: 0.90 },
    { name: "Fallout 4", genre: "RPG", performance: 0.90 },
    { name: "Resident Evil 4", genre: "Terror / Acción", performance: 0.75 }
];

// ============================================================
// PROCESADORES
// ============================================================

const cpus = [
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

    "Intel Core i9-9900K",
    "Intel Core i9-10900K",
    "Intel Core i9-11900K",
    "Intel Core i9-12900K",
    "Intel Core i9-13900K",
    "Intel Core i9-14900K",

    "AMD Ryzen 3 1200",
    "AMD Ryzen 3 2200G",
    "AMD Ryzen 3 3100",
    "AMD Ryzen 3 3300X",
    "AMD Ryzen 3 4100",
    "AMD Ryzen 3 4300G",
    "AMD Ryzen 3 5300G",

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
    "AMD Ryzen 5 7600",
    "AMD Ryzen 5 7600X",
    "AMD Ryzen 5 8400F",
    "AMD Ryzen 5 8500G",
    "AMD Ryzen 5 8600G",
    "AMD Ryzen 5 9600X",

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

// ============================================================
// TARJETAS GRÁFICAS
// ============================================================

const gpus = [
    "NVIDIA GTX 750",
    "NVIDIA GTX 750 Ti",
    "NVIDIA GTX 760",
    "NVIDIA GTX 770",
    "NVIDIA GTX 780",
    "NVIDIA GTX 780 Ti",

    "NVIDIA GTX 950",
    "NVIDIA GTX 960",
    "NVIDIA GTX 970",
    "NVIDIA GTX 980",
    "NVIDIA GTX 980 Ti",

    "NVIDIA GTX 1050",
    "NVIDIA GTX 1050 Ti",
    "NVIDIA GTX 1060 3GB",
    "NVIDIA GTX 1060 6GB",
    "NVIDIA GTX 1070",
    "NVIDIA GTX 1070 Ti",
    "NVIDIA GTX 1080",
    "NVIDIA GTX 1080 Ti",

    "NVIDIA GTX 1630",
    "NVIDIA GTX 1650",
    "NVIDIA GTX 1650 Super",
    "NVIDIA GTX 1660",
    "NVIDIA GTX 1660 Super",
    "NVIDIA GTX 1660 Ti",

    "NVIDIA RTX 2060",
    "NVIDIA RTX 2060 Super",
    "NVIDIA RTX 2070",
    "NVIDIA RTX 2070 Super",
    "NVIDIA RTX 2080",
    "NVIDIA RTX 2080 Super",
    "NVIDIA RTX 2080 Ti",

    "NVIDIA RTX 3050",
    "NVIDIA RTX 3060",
    "NVIDIA RTX 3060 Ti",
    "NVIDIA RTX 3070",
    "NVIDIA RTX 3070 Ti",
    "NVIDIA RTX 3080",
    "NVIDIA RTX 3080 Ti",
    "NVIDIA RTX 3090",
    "NVIDIA RTX 3090 Ti",

    "NVIDIA RTX 4060",
    "NVIDIA RTX 4060 Ti",
    "NVIDIA RTX 4070",
    "NVIDIA RTX 4070 Super",
    "NVIDIA RTX 4070 Ti",
    "NVIDIA RTX 4070 Ti Super",
    "NVIDIA RTX 4080",
    "NVIDIA RTX 4080 Super",
    "NVIDIA RTX 4090",

    "NVIDIA RTX 5060",
    "NVIDIA RTX 5060 Ti",
    "NVIDIA RTX 5070",
    "NVIDIA RTX 5070 Ti",
    "NVIDIA RTX 5080",
    "NVIDIA RTX 5090",

    "AMD RX 460",
    "AMD RX 470",
    "AMD RX 480",
    "AMD RX 550",
    "AMD RX 560",
    "AMD RX 570",
    "AMD RX 580",
    "AMD RX 590",

    "AMD Vega 3",
    "AMD Vega 6",
    "AMD Vega 7",
    "AMD Vega 8",
    "AMD Vega 10",
    "AMD Vega 11",

    "AMD RX 5500 XT",
    "AMD RX 5600 XT",
    "AMD RX 5700",
    "AMD RX 5700 XT",

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

    "AMD RX 7600",
    "AMD RX 7600 XT",
    "AMD RX 7700 XT",
    "AMD RX 7800 XT",
    "AMD RX 7900 GRE",
    "AMD RX 7900 XT",
    "AMD RX 7900 XTX",

    "AMD RX 9060 XT",
    "AMD RX 9070",
    "AMD RX 9070 XT",

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
// POTENCIA GPU
// ============================================================

const gpuPower = {
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

    "AMD Vega 3": 8,
    "AMD Vega 6": 12,
    "AMD Vega 7": 15,
    "AMD Vega 8": 17,
    "AMD Vega 10": 20,
    "AMD Vega 11": 22,

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

// ============================================================
// POTENCIA CPU
// ============================================================

const cpuPower = {};

cpus.forEach((cpu, index) => {
    let power = 40 + index * 0.65;

    if (cpu.includes("i3")) power += 0;
    if (cpu.includes("i5")) power += 8;
    if (cpu.includes("i7")) power += 16;
    if (cpu.includes("i9")) power += 24;

    if (cpu.includes("Ryzen 3")) power += 0;
    if (cpu.includes("Ryzen 5")) power += 8;
    if (cpu.includes("Ryzen 7")) power += 16;
    if (cpu.includes("Ryzen 9")) power += 24;

    if (cpu.includes("X3D")) power += 10;

    cpuPower[cpu] = Math.min(165, Math.round(power));
});

// ============================================================
// ELEMENTOS
// ============================================================

const gameSelect = document.getElementById("game");
const cpuSelect = document.getElementById("cpu");
const gpuSelect = document.getElementById("gpu");

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");
const calculateButton = document.getElementById("calculateButton");

// ============================================================
// OPCIONES
// ============================================================

function addOptions(select, items) {
    if (!select) return;

    select.innerHTML = "";

    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
}

// ============================================================
// ESCAPAR HTML
// ============================================================

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

// ============================================================
// RAWG
// ============================================================

async function getRawgGame(gameName) {
    try {
        const url =
            API_URL +
            "/api/games?search=" +
            encodeURIComponent(gameName) +
            "&page_size=1";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        if (
            data &&
            Array.isArray(data.results) &&
            data.results.length > 0
        ) {
            return data.results[0];
        }

        return null;

    } catch (error) {
        console.warn(
            "RAWG no pudo cargar " + gameName,
            error
        );

        return null;
    }
}

// ============================================================
// IMAGEN RAWG
// ============================================================

async function getRawgGameImage(gameName) {
    const game = await getRawgGame(gameName);

    if (!game) {
        return null;
    }

    return game.background_image || null;
}

// ============================================================
// TARJETAS
// ============================================================

async function loadGames() {
    if (!gamesGrid) {
        console.warn("No existe #gamesGrid");
        return;
    }

    gamesGrid.innerHTML = "";

    games.forEach(game => {
        const card = document.createElement("div");

        card.className = "game-card";
        card.dataset.game = game.name;

        card.innerHTML =
            '<div class="game-image-container">' +
                '<div class="game-image-loading">🎮</div>' +
            '</div>' +
            '<div class="game-info">' +
                "<strong>" + escapeHTML(game.name) + "</strong>" +
                "<span>" + escapeHTML(game.genre) + "</span>" +
            "</div>";

        card.addEventListener("click", function() {
            selectGame(game.name);
        });

        gamesGrid.appendChild(card);

        loadGameImage(game, card);
    });
}

// ============================================================
// IMAGEN DE TARJETA
// ============================================================

async function loadGameImage(game, card) {
    const container =
        card.querySelector(".game-image-container");

    if (!container) return;

    const image = await getRawgGameImage(game.name);

    if (image) {
        const img = document.createElement("img");

        img.className = "game-image";
        img.src = image;
        img.alt = game.name;
        img.loading = "lazy";

        img.onerror = function() {
            container.innerHTML =
                '<div class="game-image-loading">🎮</div>';
        };

        container.innerHTML = "";
        container.appendChild(img);

    } else {
        container.innerHTML =
            '<div class="game-image-loading">🎮</div>';
    }
}

// ============================================================
// SELECCIONAR JUEGO
// ============================================================

function selectGame(gameName) {
    if (gameSelect) {
        gameSelect.value = gameName;
    }

    document
        .querySelectorAll(".game-card")
        .forEach(card => {
            card.classList.remove("selected");

            if (card.dataset.game === gameName) {
                card.classList.add("selected");
            }
        });

    calculateFPS();
}

// ============================================================
// BUSCADOR
// ============================================================

function filterGames() {
    if (!gameSearch) return;

    const search =
        gameSearch.value.toLowerCase().trim();

    document
        .querySelectorAll(".game-card")
        .forEach(card => {
            const name =
                card.dataset.game.toLowerCase();

            card.style.display =
                name.includes(search) ? "" : "none";
        });
}

// ============================================================
// JUEGO SELECCIONADO
// ============================================================

function getSelectedGame() {
    const gameName =
        gameSelect && gameSelect.value
            ? gameSelect.value
            : games[0].name;

    return (
        games.find(game => game.name === gameName) ||
        games[0]
    );
}

// ============================================================
// POTENCIA
// ============================================================

function getGpuPower(gpu) {
    return gpuPower[gpu] || 50;
}

function getCpuPower(cpu) {
    return cpuPower[cpu] || 50;
}

// ============================================================
// CALCULADORA
// ============================================================

function calculateFPS() {
    if (!gameSelect || !cpuSelect || !gpuSelect) {
        return;
    }

    const game = getSelectedGame();
    const cpu = cpuSelect.value;
    const gpu = gpuSelect.value;

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

    const gpuPowerValue = getGpuPower(gpu);
    const cpuPowerValue = getCpuPower(cpu);

    let fps = gpuPowerValue * 2.2;

    fps *= game.performance;

    const cpuFactor =
        Math.min(
            cpuPowerValue / 60,
            1.30
        );

    fps *= cpuFactor;

    if (resolution === "1440p") {
        fps *= 0.68;
    }

    if (resolution === "2160p") {
        fps *= 0.42;
    }

    if (quality === "low") {
        fps *= 1.45;
    }

    if (quality === "medium") {
        fps *= 1.20;
    }

    if (quality === "ultra") {
        fps *= 0.78;
    }

    fps = Math.max(5, Math.round(fps));

    const onePercent =
        Math.max(
            1,
            Math.round(fps * 0.70)
        );

    let cpuUsage =
        Math.round(
            Math.min(
                100,
                45 +
                (gpuPowerValue /
                    Math.max(cpuPowerValue, 1)) *
                25
            )
        );

    let gpuUsage =
        Math.round(
            Math.min(
                99,
                70 +
                gpuPowerValue / 5
            )
        );

    let bottleneck = "GPU";

    if (cpuPowerValue < gpuPowerValue * 0.65) {
        bottleneck = "CPU";
        cpuUsage = 95;
        gpuUsage = 75;
    }

    let performanceText = "Bajo";

    if (fps >= 144) {
        performanceText = "Excelente";
    } else if (fps >= 100) {
        performanceText = "Muy bueno";
    } else if (fps >= 60) {
        performanceText = "Bueno";
    } else if (fps >= 30) {
        performanceText = "Jugable";
    }

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
        fpsNumber.textContent = fps + " FPS";
    }

    if (averageFPS) {
        averageFPS.textContent = fps + " FPS";
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
// COMPARADOR
// ============================================================

function setupComparison() {
    const gpu1 =
        document.getElementById("compareGpu1");

    const gpu2 =
        document.getElementById("compareGpu2");

    const result =
        document.getElementById("compareResult");

    if (!gpu1 || !gpu2 || !result) {
        return;
    }

    addOptions(gpu1, gpus);
    addOptions(gpu2, gpus);

    if (gpus.length > 1) {
        gpu2.selectedIndex = 1;
    }

    function compare() {
        const power1 = getGpuPower(gpu1.value);
        const power2 = getGpuPower(gpu2.value);

        if (power2 <= 0) {
            return;
        }

        const difference =
            Math.round(
                ((power1 - power2) / power2) * 100
            );

        if (difference > 0) {
            result.textContent =
                gpu1.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu2.value +
                ".";
        } else if (difference < 0) {
            result.textContent =
                gpu2.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu1.value +
                ".";
        } else {
            result.textContent =
                "Las dos gráficas tienen un rendimiento estimado similar.";
        }
    }

    gpu1.addEventListener("change", compare);
    gpu2.addEventListener("change", compare);

    compare();
}

// ============================================================
// CONTADORES
// ============================================================

function updateCounters() {
    const gameCount =
        document.getElementById("gameCount");

    const cpuCount =
        document.getElementById("cpuCount");

    const gpuCount =
        document.getElementById("gpuCount");

    if (gameCount) {
        gameCount.textContent = games.length;
    }

    if (cpuCount) {
        cpuCount.textContent = cpus.length;
    }

    if (gpuCount) {
        gpuCount.textContent = gpus.length;
    }
}

// ============================================================
// COMPROBAR API
// ============================================================

async function checkAPI() {
    try {
        const response =
            await fetch(API_URL + "/api/status");

        if (!response.ok) {
            throw new Error(
                "HTTP " + response.status
            );
        }

        const data = await response.json();

        console.log("FPSCalculator API:", data);

        if (data.rawg_configured) {
            console.log("RAWG conectado correctamente");
        } else {
            console.warn("RAWG_API_KEY no configurada");
        }

    } catch (error) {
        console.warn(
            "API no disponible:",
            error
        );
    }
}

// ============================================================
// INICIO
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log("FPSCalculator iniciado");

        addOptions(
            gameSelect,
            games.map(game => game.name)
        );

        addOptions(
            cpuSelect,
            cpus
        );

        addOptions(
            gpuSelect,
            gpus
        );

        loadGames();

        updateCounters();

        setupComparison();

        checkAPI();

        if (gameSearch) {
            gameSearch.addEventListener(
                "input",
                filterGames
            );
        }

        if (calculateButton) {
            calculateButton.addEventListener(
                "click",
                calculateFPS
            );
        }

        if (gameSelect) {
            gameSelect.addEventListener(
                "change",
                calculateFPS
            );
        }

        if (cpuSelect) {
            cpuSelect.addEventListener(
                "change",
                calculateFPS
            );
        }

        if (gpuSelect) {
            gpuSelect.addEventListener(
                "change",
                calculateFPS
            );
        }

        const resolution =
            document.getElementById("resolution");

        const quality =
            document.getElementById("quality");

        if (resolution) {
            resolution.addEventListener(
                "change",
                calculateFPS
            );
        }

        if (quality) {
            quality.addEventListener(
                "change",
                calculateFPS
            );
        }

        calculateFPS();

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
    }
);
```
