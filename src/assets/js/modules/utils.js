function pegaElemento(nomeElement, umOumais = 1) {
  if (umOumais > 1) {
    return Array.from(document.querySelectorAll(nomeElement)); //1
  } else {
    return document.querySelector(nomeElement);
  }
}




export { pegaElemento };
