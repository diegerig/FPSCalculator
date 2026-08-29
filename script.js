const games = [
    {
        name: "Fortnite",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1665460/header.jpg"
    },
    {
        name: "Grand Theft Auto V",
        genre: "Acción / Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
    },
    {
        name: "Red Dead Redemption 2",
        genre: "Acción / Mundo abierto",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
        name: "Cyberpunk 2077",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        name: "Minecraft",
        genre: "Supervivencia / Construcción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg"
    },
    {
        name: "Counter-Strike 2",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg"
    },
    {
        name: "VALORANT",
        genre: "FPS",
        image: "https://placehold.co/600x338/101218/ff3030?text=VALORANT"
    },
    {
        name: "Apex Legends",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"
    },
    {
        name: "Call of Duty Warzone",
        genre: "FPS / Battle Royale",
        image: "https://placehold.co/600x338/101218/ff3030?text=CALL+OF+DUTY+WARZONE"
    },
    {
        name: "Rocket League",
        genre: "Deportes",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg"
    },
    {
        name: "EA Sports FC 25",
        genre: "Fútbol",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg"
    },
    {
        name: "Forza Horizon 5",
        genre: "Carreras",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg"
    },
    {
        name: "Forza Motorsport",
        genre: "Carreras",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2440510/header.jpg"
    },
    {
        name: "BeamNG.drive",
        genre: "Simulación",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/284160/header.jpg"
    },
    {
        name: "Rust",
        genre: "Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg"
    },
    {
        name: "The Forest",
        genre: "Terror / Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg"
    },
    {
        name: "Sons of the Forest",
        genre: "Terror / Supervivencia",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg"
    },
    {
        name: "Phasmophobia",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg"
    },
    {
        name: "Dead by Daylight",
        genre: "Terror",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg"
    },
    {
        name: "PUBG",
        genre: "Battle Royale",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"
    },
    {
        name: "Overwatch 2",
        genre: "FPS",
        image: "https://placehold.co/600x338/101218/ff3030?text=OVERWATCH+2"
    },
    {
        name: "Rainbow Six Siege",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg"
    },
    {
        name: "The Witcher 3",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg"
    },
    {
        name: "Hogwarts Legacy",
        genre: "RPG",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg"
    },
    {
        name: "Elden Ring",
        genre: "RPG / Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
        name: "Starfield",
        genre: "RPG / Ciencia ficción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg"
    },
    {
        name: "Battlefield 2042",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg"
    },
    {
        name: "The Finals",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2073850/header.jpg"
    },
    {
        name: "Destiny 2",
        genre: "FPS",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg"
    },
    {
        name: "Dying Light 2",
        genre: "Terror / Acción",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg"
    }
];


const cpus = [
    "Intel Core i3-8100",
    "Intel Core i3-9100F",
    "Intel Core i3-10100F",
    "Intel Core i3-12100F",
    "Intel Core i3-13100F",
    "Intel Core i3-14100F",

    "Intel Core i5-8400",
    "Intel Core i5-9400F",
    "Intel Core i5-10400F",
    "Intel Core i5-11400F",
    "Intel Core i5-12400F",
    "Intel Core i5-13400F",
    "Intel Core i5-14400F",
    "Intel Core i5-14600K",

    "Intel Core i7-8700K",
    "Intel Core i7-9700K",
    "Intel Core i7-10700K",
    "Intel Core i7-11700K",
    "Intel Core i7-12700K",
    "Intel Core i7-13700K",
    "Intel Core i7-14700K",

    "Intel Core i9-9900K",
    "Intel Core i9-10900K",
    "Intel Core i9-11900K",
    "Intel Core i9-12900K",
    "Intel Core i9-13900K",
    "Intel Core i9-14900K",

    "AMD Ryzen 3 2200G",
    "AMD Ryzen 3 3100",
    "AMD Ryzen 3 4100",
    "AMD Ryzen 3 5300G",

    "AMD Ryzen 5 1600",
    "AMD Ryzen 5 2600",
    "AMD Ryzen 5 3600",
    "AMD Ryzen 5 4500",
    "AMD Ryzen 5 5500",
    "AMD Ryzen 5 5600",
    "AMD Ryzen 5 5600G",
    "AMD Ryzen 5 5700G",
    "AMD Ryzen 5 7600",
    "AMD Ryzen 5 7600X",
    "AMD Ryzen 5 8600G",
    "AMD Ryzen 5 9600X",

    "AMD Ryzen 7 2700X",
    "AMD Ryzen 7 3700X",
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
    "AMD Ryzen 9 5900X",
    "AMD Ryzen 9 5950X",
    "AMD Ryzen 9 7900X",
    "AMD Ryzen 9 7950X",
    "AMD Ryzen 9 7950X3D",
    "AMD Ryzen 9 9900X",
    "AMD Ryzen 9 9950X",
    "AMD Ryzen 9 9950X3D"
];


const gpus = [
    "NVIDIA GTX 750 Ti",
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

    "AMD RX 550",
    "AMD RX 560",
    "AMD RX 570",
    "AMD RX 580",
    "AMD RX 590",

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

    "AMD Vega 3",
    "AMD Vega 6",
    "AMD Vega 7",
    "AMD Vega 8",
    "AMD Vega 10",
    "AMD Vega 11",

    "Intel UHD 630",
    "Intel UHD 730",
    "Intel UHD 770",
    "Intel Iris Xe"
];


const gameSelect = document.getElementById("game");
const cpuSelect = document.getElementById("cpu");
const gpuSelect = document.getElementById("gpu");

const gamesGrid = document.getElementById("gamesGrid");
const gameSearch = document.getElementById("gameSearch");

const calculateButton = document.getElementById("calculateButton");


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
                onerror="this.src='https://placehold.co/600x338/101218/ff3030?text=FPSCalculator'"
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


function selectGame(gameName) {

    if (!gameSelect) {
        return;
    }

    gameSelect.value = gameName;

    document.querySelectorAll(".game-card").forEach(function(card) {

        card.classList.remove("selected");

        if (card.dataset.game === gameName) {
            card.classList.add("selected");
        }

    });

    document.getElementById("calculator").scrollIntoView({
        behavior: "smooth"
    });

}


function filterGames() {

    const search = gameSearch.value.toLowerCase().trim();

    document.querySelectorAll(".game-card").forEach(function(card) {

        const name = card.dataset.game.toLowerCase();

        if (name.includes(search)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

}


function getGpuPower(gpu) {

    const power = {

        "NVIDIA GTX 750 Ti": 15,
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

        "Intel UHD 630": 10,
        "Intel UHD 730": 15,
        "Intel UHD 770": 20,
        "Intel Iris Xe": 25

    };

    return power[gpu] || 50;

}


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

    if (cpu.includes("G")) {
        power -= 5;
    }

    return power;

}


function calculateFPS() {

    const game = gameSelect.value;
    const cpu = cpuSelect.value;
    const gpu = gpuSelect.value;

    const resolution = document.getElementById("resolution").value;
    const quality = document.getElementById("quality").value;

    let gpuPower = getGpuPower(gpu);
    let cpuPower = getCpuPower(cpu);

    let fps = gpuPower * 2.2;

    const gameModifiers = {

        "Fortnite": 1.25,
        "Grand Theft Auto V": 1.10,
        "Red Dead Redemption 2": 0.70,
        "Cyberpunk 2077": 0.65,
        "Minecraft": 1.35,
        "Counter-Strike 2": 1.40,
        "VALORANT": 1.55,
        "Apex Legends": 1.05,
        "Call of Duty Warzone": 0.85,
        "Rocket League": 1.55,
        "EA Sports FC 25": 1.30,
        "Forza Horizon 5": 0.85,
        "Forza Motorsport": 0.75,
        "BeamNG.drive": 0.70,
        "Rust": 0.75,
        "The Forest": 0.90,
        "Sons of the Forest": 0.65,
        "Phasmophobia": 1.10,
        "Dead by Daylight": 1.00,
        "PUBG": 0.95,
        "Overwatch 2": 1.25,
        "Rainbow Six Siege": 1.30,
        "The Witcher 3": 0.85,
        "Hogwarts Legacy": 0.65,
        "Elden Ring": 0.75,
        "Starfield": 0.55,
        "Battlefield 2042": 0.75,
        "The Finals": 0.85,
        "Destiny 2": 1.00,
        "Dying Light 2": 0.65

    };

    fps *= gameModifiers[game] || 1;

    const cpuFactor = Math.min(cpuPower / 60, 1.25);

    fps *= cpuFactor;

    if (resolution === "1440p") {
        fps *= 0.68;
    }

    if (resolution === "4K") {
        fps *= 0.42;
    }

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

    fps = Math.max(5, Math.round(fps));

    const onePercent = Math.max(
        1,
        Math.round(fps * 0.70)
    );

    let cpuUsage = Math.round(
        Math.min(
            100,
            45 + (gpuPower / Math.max(cpuPower, 1)) * 25
        )
    );

    let gpuUsage = Math.round(
        Math.min(
            99,
            70 + gpuPower / 5
        )
    );

    let bottleneck = "GPU";

    if (cpuPower < gpuPower * 0.65) {

        bottleneck = "CPU";

        cpuUsage = 95;
        gpuUsage = 75;

    }

    let performance = "Bajo";

    if (fps >= 144) {
        performance = "Excelente";
    }
    else if (fps >= 100) {
        performance = "Muy bueno";
    }
    else if (fps >= 60) {
        performance = "Bueno";
    }
    else if (fps >= 30) {
        performance = "Jugable";
    }

    document.getElementById("fpsNumber").textContent =
        fps + " FPS";

    document.getElementById("averageFPS").textContent =
        fps + " FPS";

    document.getElementById("onePercent").textContent =
        onePercent + " FPS";

    document.getElementById("cpuUsage").textContent =
        cpuUsage + "%";

    document.getElementById("gpuUsage").textContent =
        gpuUsage + "%";

    document.getElementById("performanceBadge").textContent =
        performance;

    document.getElementById("bottleneckText").textContent =
        bottleneck;

    document.getElementById("resultDescription").textContent =
        game +
        " • " +
        gpu +
        " • " +
        resolution +
        " • " +
        quality;

}


function setupComparison() {

    const gpu1 = document.getElementById("compareGpu1");
    const gpu2 = document.getElementById("compareGpu2");

    if (!gpu1 || !gpu2) {
        return;
    }

    addOptions(gpu1, gpus);
    addOptions(gpu2, gpus);

    gpu2.selectedIndex = Math.min(
        1,
        gpus.length - 1
    );

    function compare() {

        const power1 = getGpuPower(gpu1.value);
        const power2 = getGpuPower(gpu2.value);

        const difference = Math.round(
            ((power1 - power2) / power2) * 100
        );

        let text;

        if (difference > 0) {

            text =
                gpu1.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu2.value +
                ".";

        }
        else if (difference < 0) {

            text =
                gpu2.value +
                " es aproximadamente un " +
                Math.abs(difference) +
                "% más potente que " +
                gpu1.value +
                ".";

        }
        else {

            text =
                "Las dos gráficas tienen un rendimiento estimado similar.";

        }

        document.getElementById("compareResult").textContent =
            text;

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


function updateCounters() {

    const gameCount = document.getElementById("gameCount");
    const cpuCount = document.getElementById("cpuCount");
    const gpuCount = document.getElementById("gpuCount");

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


document.addEventListener(
    "DOMContentLoaded",
    function() {

        addOptions(
            gameSelect,
            games.map(function(game) {
                return game.name;
            })
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

        console.log(
            "FPSCalculator iniciado correctamente"
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

    }
);