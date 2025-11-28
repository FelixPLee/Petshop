`use strict`


//
const User = class {
    constructor({...userInfo}){
        this.name = name
        this.address = address
        this.cpf = cpf
        this.gender = gender
        this.telephone = telephone
        this.email = email
        this.password = password
    }
}

const getUserinfo = function() {
    
}

// Seleciona o elemento DOM
const myCarouselElement = document.querySelector('#carrosselBaner');

// Inicializa com opções customizadas
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, // Tempo em milissegundos entre transições (Padrão: 5000)
  wrap: true,     // Se o carrossel deve voltar ao início após o último slide
  touch: true     // Habilita gestos de "swipe" em dispositivos touch
});