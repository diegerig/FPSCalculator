from pathlib import Path

BASE_URL = "https://diegerig.github.io/FPSCalculator"

JUEGOS = {
    "minecraft": "Minecraft",
    "warzone": "Call of Duty: Warzone",
    "valorant": "VALORANT",
    "cs2": "Counter-Strike 2",
    "apex-legends": "Apex Legends",
    "rocket-league": "Rocket League",
    "red-dead-redemption-2": "Red Dead Redemption 2",
    "forza-horizon-5": "Forza Horizon 5",
    "overwatch-2": "Overwatch 2",
    "rainbow-six-siege": "Rainbow Six Siege",
    "cyberpunk-2077": "Cyberpunk 2077",
    "elden-ring": "Elden Ring",
    "hogwarts-legacy": "Hogwarts Legacy",
    "ea-sports-fc-26": "EA Sports FC 26",
    "pubg": "PUBG: BATTLEGROUNDS",
    "league-of-legends": "League of Legends",
    "gta-vi": "Grand Theft Auto VI",
    "the-witcher-3": "The Witcher 3"
}


PLANTILLA = """<!DOCTYPE html>
<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>FPS {juego} - Calculadora de FPS para PC | FPSCalculator</title>

<meta
name="description"
content="Calcula los FPS aproximados de {juego} en tu PC según tu procesador, tarjeta gráfica, resolución y calidad gráfica."
>

<meta
name="robots"
content="index, follow"
>

<link
rel="canonical"
href="{base}/{slug}.html"
>

<meta
property="og:title"
content="FPS {juego} - Calculadora de FPS para PC"
>

<meta
property="og:description"
content="Calcula el rendimiento aproximado de tu PC en {juego}."
>

<meta
property="og:url"
content="{base}/{slug}.html"
>

<meta
property="og:type"
content="website"
>

<meta
property="og:site_name"
content="FPSCalculator"
>

<link
rel="stylesheet"
href="../style.css"
>

<style>

.game-content {{
    padding: 70px 0;
}}

.game-content p {{
    line-height: 1.8;
    margin-bottom: 20px;
}}

.game-table {{
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
}}

.game-table th,
.game-table td {{
    padding: 15px;
    border-bottom: 1px solid rgba(255,255,255,.1);
    text-align: left;
}}

.game-card {{
    padding: 25px;
    border-radius: 15px;
    background: rgba(255,255,255,.04);
}}

.faq details {{
    margin-bottom: 12px;
    padding: 20px;
    border-radius: 12px;
    background: rgba(255,255,255,.04);
}}

.faq summary {{
    cursor: pointer;
    font-weight: bold;
}}

</style>

</head>


<body>


<header class="topbar">

<div class="container nav-container">

<a
href="../index.html"
class="brand"
>

<span class="brand-icon">
⚡
</span>

<span>
FPS<span>Calculator</span>
</span>

</a>


<nav>

<a href="../index.html">
Calculadora
</a>

<a href="#rendimiento">
Rendimiento
</a>

<a href="#faq">
FAQ
</a>

</nav>

</div>

</header>



<main>


<section class="hero">

<div class="container hero-container">


<div class="hero-content">

<div class="badge">

🎮 {juego} FPS CALCULATOR

</div>


<h1>

¿Cuántos FPS tendrás

<span>en {juego}</span>?

</h1>


<p>

Calcula el rendimiento aproximado
de tu PC en {juego} seleccionando
tu procesador, tarjeta gráfica,
resolución y calidad.

</p>


<a
href="../index.html#calculator"
class="primary-button"
>

🚀 Calcular FPS

</a>

</div>



<div class="hero-card">

<div class="hero-card-top">

<span>
{juego}
</span>

<span class="live-dot">
●
</span>

</div>


<strong>
FPS
</strong>


<span>
CALCULATOR
</span>


<div class="fake-bar">

<div></div>

</div>


<small>
Rendimiento estimado
</small>

</div>


</div>

</section>



<section class="game-content">

<div class="container">


<div class="section-heading">

<span>
{juego}
</span>

<h2>
Calculadora de FPS para {juego}
</h2>

</div>


<p>

FPSCalculator permite calcular una
estimación del rendimiento de tu PC
en {juego} utilizando tu procesador,
tarjeta gráfica, resolución y calidad
gráfica.

</p>


<p>

Selecciona tus componentes en la
calculadora para conocer una estimación
de los FPS que puedes conseguir.

</p>


<p>

Recuerda que los FPS reales pueden
variar dependiendo de la memoria RAM,
temperaturas, controladores,
configuración del juego y otros factores.

</p>


</div>

</section>



<section
id="rendimiento"
class="game-content"
>

<div class="container">


<div class="section-heading">

<span>
RENDIMIENTO
</span>

<h2>
¿Qué afecta a los FPS de {juego}?
</h2>

</div>



<div class="info-grid">


<article class="game-card">

<h3>
🎨 Tarjeta gráfica
</h3>

<p>

La GPU es uno de los componentes
más importantes para conseguir
un buen rendimiento gráfico.

</p>

</article>



<article class="game-card">

<h3>
🧠 Procesador
</h3>

<p>

La CPU también puede limitar
el número de FPS, especialmente
cuando buscamos FPS elevados.

</p>

</article>



<article class="game-card">

<h3>
🖥️ Resolución
</h3>

<p>

Una resolución mayor aumenta
la carga sobre la tarjeta gráfica.

</p>

</article>


</div>


</div>

</section>



<section class="game-content">

<div class="container">


<div class="section-heading">

<span>
RESOLUCIONES
</span>

<h2>

{juego} en 720p, 1080p,
1440p y 4K

</h2>

</div>



<table class="game-table">


<thead>

<tr>

<th>
Resolución
</th>

<th>
Uso habitual
</th>

<th>
Carga gráfica
</th>

</tr>

</thead>


<tbody>

<tr>

<td>
720p
</td>

<td>
Máximos FPS
</td>

<td>
Baja
</td>

</tr>


<tr>

<td>
1080p
</td>

<td>
Gaming estándar
</td>

<td>
Moderada
</td>

</tr>


<tr>

<td>
1440p
</td>

<td>
Mayor calidad
</td>

<td>
Alta
</td>

</tr>


<tr>

<td>
4K
</td>

<td>
Máxima calidad
</td>

<td>
Muy alta
</td>

</tr>

</tbody>

</table>


</div>

</section>



<section class="game-content">

<div class="container">


<div class="section-heading">

<span>
OPTIMIZACIÓN
</span>

<h2>
¿Cómo conseguir más FPS?
</h2>

</div>


<div class="info-grid">


<article class="game-card">

<h3>
⚙️ Baja algunos gráficos
</h3>

<p>

Reducir determinadas opciones
gráficas puede aumentar
los FPS.

</p>

</article>



<article class="game-card">

<h3>
🖥️ Ajusta la resolución
</h3>

<p>

Una resolución menor puede
reducir la carga de la GPU.

</p>

</article>



<article class="game-card">

<h3>
🚀 Comprueba tu hardware
</h3>

<p>

Una combinación equilibrada
de CPU y GPU ayuda a conseguir
un rendimiento estable.

</p>

</article>


</div>


</div>

</section>



<section class="game-content">

<div class="container">


<div class="game-card">

<h2>

Calcula los FPS de {juego}

</h2>


<p>

Introduce los componentes de tu
ordenador en nuestra calculadora.

</p>


<a
href="../index.html#calculator"
class="primary-button"
>

🎮 Abrir calculadora

</a>

</div>


</div>

</section>



<section
id="faq"
class="game-content"
>

<div class="container">


<div class="section-heading">

<span>
FAQ
</span>

<h2>

Preguntas frecuentes sobre
los FPS de {juego}

</h2>

</div>



<div class="faq">


<details>

<summary>

¿Cuántos FPS necesito para jugar {juego}?

</summary>

<p>

Depende del tipo de juego,
tu monitor y tus preferencias.
Una frecuencia alta normalmente
ofrece una experiencia más fluida.

</p>

</details>



<details>

<summary>

¿La GPU afecta a los FPS?

</summary>

<p>

Sí. La tarjeta gráfica tiene
una gran influencia en el
rendimiento gráfico.

</p>

</details>



<details>

<summary>

¿La CPU afecta a los FPS?

</summary>

<p>

Sí. El procesador puede ser
un factor limitante dependiendo
del juego y la configuración.

</p>

</details>



<details>

<summary>

¿Los FPS son exactos?

</summary>

<p>

No. FPSCalculator proporciona
estimaciones. El rendimiento real
puede variar según el hardware
y la configuración.

</p>

</details>


</div>


</div>

</section>


</main>



<footer>

<div class="container footer-container">


<div>

<div class="footer-brand">

⚡ FPSCalculator

</div>

<p>
Calculadora de FPS para PC.
</p>

</div>



<div class="footer-links">

<a href="../index.html">
Inicio
</a>

<a href="../privacidad.html">
Privacidad
</a>

<a href="../cookies.html">
Cookies
</a>

<a href="../contacto.html">
Contacto
</a>

</div>



<div class="copyright">

© 2026 FPSCalculator

</div>


</div>

</footer>


</body>

</html>
"""


def crear_paginas():

    carpeta = Path("juegos")

    carpeta.mkdir(exist_ok=True)

    for slug, juego in JUEGOS.items():

        html = PLANTILLA.format(
            base=BASE_URL,
            slug=slug,
            juego=juego
        )

        archivo = carpeta / f"{slug}.html"

        archivo.write_text(
            html,
            encoding="utf-8"
        )

        print("Creada:", archivo)


def crear_sitemap():

    urls = [

        f"{BASE_URL}/",

        f"{BASE_URL}/fortnite.html",

        f"{BASE_URL}/gta-v.html"

    ]


    for slug in JUEGOS:

        urls.append(
            f"{BASE_URL}/juegos/{slug}.html"
        )


    urls.extend([

        f"{BASE_URL}/privacidad.html",

        f"{BASE_URL}/cookies.html",

        f"{BASE_URL}/contacto.html"

    ])


    sitemap = """<?xml version="1.0" encoding="UTF-8"?>

<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

"""


    for url in urls:

        sitemap += f"""
<url>

<loc>{url}</loc>

<changefreq>monthly</changefreq>

<priority>0.8</priority>

</url>
"""


    sitemap += """

</urlset>
"""


    Path("sitemap.xml").write_text(
        sitemap,
        encoding="utf-8"
    )


if __name__ == "__main__":

    print()
    print("===================================")
    print(" FPSCalculator - Generador SEO")
    print("===================================")
    print()

    crear_paginas()

    crear_sitemap()

    print()
    print("===================================")
    print(" TERMINADO")
    print("===================================")
    print()

    print(
        "Se han creado",
        len(JUEGOS),
        "páginas nuevas."
    )

    print()
    print("También se ha actualizado sitemap.xml")
    print()

    input(
        "Pulsa ENTER para cerrar..."
    )
