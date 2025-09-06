import { pegaElemento } from "../modules/utils.js";

const carosselDados = {
  imagens: [
    "./src/assets/img/img-jiu-jitsu-destaque.jpg",
    "./src/assets/img/img-moital-destaque.jpg",
    "./src/assets/img/img-boxer-destaque.jpg",
  ],

  mensagem: [
    { modalidade: "Sao jose da Laje - Al", arte: "Jiu-jitsu" },
    { modalidade: "Modalidade", arte: "Muay Thai" },
    { modalidade: "Modalidade", arte: "Boxer" },
  ],

  links: [
    {jiujitsu:""},
    {muaythai:""},
    {Boxer:""}
  ]
};

const inserirImg = pegaElemento(".carosesl__img");
const bntProximo = pegaElemento(".botoes.prox");
const bntAnterior = pegaElemento(".botoes.ant");
const modalidade = pegaElemento(".texto__modalidade");
const arteMarcial = pegaElemento(".texto__arte");

let intervalo;
let indice = 0;
let startX = 0;
let endX = 0;

//touch mobile
inserirImg.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX; // posição inicial do dedo
});

document.addEventListener("touchend", function (e) {
  endX = e.changedTouches[0].clientX; // posição final do dedo

  let diferenca = endX - startX;

  if (diferenca > 50) {
    diminuirIndice(); //voltar
  } else if (diferenca < -50) {
   aumentarIndice(); //proximo
  }
});

//botoes pc.
bntProximo.addEventListener("click", () => {
  aumentarIndice();
});

bntAnterior.addEventListener("click", () => {
  diminuirIndice();
});

//Aumentar ou diminuir indice.
function aumentarIndice() {
  if (indice < carosselDados.imagens.length - 1) {
    indice += 1;
  }
  passarImg(indice);
  resetaAuto();
}

function diminuirIndice() {
  if (indice > 0) {
    indice -= 1;
  }
  passarImg(indice);
  resetaAuto();
}

//Imagens + Timer.
function passarImg(novoIndice) {
  inserirImg.style.backgroundImage = `url(${carosselDados.imagens[novoIndice]})`;
  modalidade.innerText = carosselDados.mensagem[novoIndice].modalidade;
  arteMarcial.innerText = carosselDados.mensagem[novoIndice].arte;

  inserirImg.classList.remove('fade-in');
  inserirImg.offsetHeight; //sem isso o navegador ignora
  inserirImg.classList.add('fade-in');
 
}

const iniciaAuto = () => {
  intervalo = setInterval(() => {
    passarImg(indice);
    if (indice < carosselDados.imagens.length - 1) {
      indice += 1;
    } else {
      indice = 0;
    }
  }, 3100);
};

function resetaAuto() {
  clearInterval(intervalo);
  iniciaAuto();
}

iniciaAuto();
