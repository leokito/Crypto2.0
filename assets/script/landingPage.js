const heroContainer = document.createElement("div")
    heroContainer.classList.add("heroContainer")
    document.body.appendChild(heroContainer)

const backGroundVid = document.createElement("video")
    backGroundVid.classList.add("bgVid")
    backGroundVid.src = "./assets/video/bgvid.mp4"
    backGroundVid.autoplay = true
    backGroundVid.loop = true
    heroContainer.appendChild(backGroundVid)

const titulo = document.createElement("h1")
    titulo.innerText = "Bem-vindo ao Crypto 2.0"
    titulo.classList.add("titulo")
    heroContainer.appendChild(titulo)

const subtitle = document.createElement("p")
    subtitle.innerText = "Investimentos cripto de maneira rápida, segura e sem complicações."
    subtitle.classList.add("subtitulo")
    heroContainer.appendChild(subtitle)

const link = document.createElement("a")
    link.innerText = "Saiba Mais"
    link.classList.add("link")
    link.href = "./homePage.html"
    heroContainer.appendChild(link)
