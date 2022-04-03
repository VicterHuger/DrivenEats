// let prato;
// let bebida;
// let sobremesa;

function selecionarPrato(elemento){
    let pratoSelecionado = document.querySelector(".selecionado-prato");
    let iconeSelecionado = document.querySelector(".icone-clicado-prato");
    if(pratoSelecionado !== null && iconeSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado-prato")
        iconeSelecionado.classList.remove("icone-clicado-prato");
    }
    elemento.classList.add("selecionado-prato");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-prato");
}

function selecionarBebiba(elemento){
    let bebidaSelecionada = document.querySelector(".selecionado-bebida");
    let iconeSelecionado = document.querySelector(".icone-clicado-bebida");
    if(bebidaSelecionada !== null && iconeSelecionado !== null){
        bebidaSelecionada.classList.remove("selecionado-bebida")
        iconeSelecionado.classList.remove("icone-clicado-bebida");
    }
    elemento.classList.add("selecionado-bebida");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-bebida");
}

function selecionarSobremesa(elemento){
    let sobremesaSelecionada = document.querySelector(".selecionado-sobremesa");
    let iconeSelecionado = document.querySelector(".icone-clicado-sobremesa");
    if(sobremesaSelecionada !== null && iconeSelecionado !== null){
        sobremesaSelecionada.classList.remove("selecionado-sobremesa")
        iconeSelecionado.classList.remove("icone-clicado-sobremesa");
    }
    elemento.classList.add("selecionado-sobremesa");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-sobremesa");
}

