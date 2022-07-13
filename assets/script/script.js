let cryptoMoedas = [
  {
    nome: "Bitcoin",
    valor: 1000,
    descricao: "A criptomoeda surgiu em 2009, criada pelo Satoshi Nakamoto, como uma forma de facilitar as negociações pela internet."

  },
  {
    nome: "Ethereum",
    valor: 500,
    descricao: "O foco do Ethereum é ser uma plataforma de programação para aplicações descentralizadas e contratos inteligentes"

  },
  {
    nome: "Tether",
    valor: 100,
    descricao: "é uma criptomoeda com um preço fixo medido por uma moeda fiduciária, neste caso, os dólares americanos."
  },
]

const container = document.querySelector(".cardContainer")

const criarCard = (crypto) => {

  let nome = crypto.nome
  let preco = crypto.valor
  let descricao = crypto.descricao

  const card = document.createElement("div")
  const cartTitle = document.createElement("h3")
  const cardPrice = document.createElement('p')
  const cardDescription = document.createElement("p")
  const cardButton = document.createElement("button")
  const cardLine = document.createElement("div")

   cardLine.classList.add("line")
   cardPrice.classList.add("price")

  cartTitle.innerText = nome
  cardPrice.innerText = `R$ ${preco},00`
  cardDescription.innerText = descricao
  cardButton.innerText = "Investir"

  card.classList.add("card")

  card.append(cartTitle, cardLine, cardPrice,cardDescription, cardButton)

  return card
}

const listarCards = (array, selector) => {

  for (let i = 0; i < array.length; i++) {
    let cripto = array[i]
    let card = criarCard(cripto)
    selector.appendChild(card)
  }
}


listarCards(cryptoMoedas, container)

// Responsive carousel
// =============================================================================

const $responsiveCarousel = document.querySelector(".js-carousel--responsive");

new Glider($responsiveCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  duration: 0.25,
  dots: ".js-carousel--responsive-dots",
  arrows: {
    prev: ".js-carousel--responsive-prev",
    next: ".js-carousel--responsive-next",
  },
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

//cards

