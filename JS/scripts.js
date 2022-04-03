//Variáveis globais
let prato;
 let bebida;
 let sobremesa;

 //função que verifica e seleciona um prato
function selecionarPrato(elemento){
    let pratoSelecionado = document.querySelector(".selecionado-prato");
    let iconeSelecionado = document.querySelector(".icone-clicado-prato");
    if(pratoSelecionado !== null && iconeSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado-prato")
        iconeSelecionado.classList.remove("icone-clicado-prato");
    }
    elemento.classList.add("selecionado-prato");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-prato");
    prato=elemento;
}
 //função que verifica e seleciona uma bebida
function selecionarBebiba(elemento){
    let bebidaSelecionada = document.querySelector(".selecionado-bebida");
    let iconeSelecionado = document.querySelector(".icone-clicado-bebida");
    if(bebidaSelecionada !== null && iconeSelecionado !== null){
        bebidaSelecionada.classList.remove("selecionado-bebida")
        iconeSelecionado.classList.remove("icone-clicado-bebida");
    }
    elemento.classList.add("selecionado-bebida");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-bebida");
    bebida=elemento;
}
 //função que verifica e seleciona uma sobremesa
function selecionarSobremesa(elemento){
    let sobremesaSelecionada = document.querySelector(".selecionado-sobremesa");
    let iconeSelecionado = document.querySelector(".icone-clicado-sobremesa");
    if(sobremesaSelecionada !== null && iconeSelecionado !== null){
        sobremesaSelecionada.classList.remove("selecionado-sobremesa")
        iconeSelecionado.classList.remove("icone-clicado-sobremesa");
    }
    elemento.classList.add("selecionado-sobremesa");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-sobremesa");
    sobremesa=elemento;
}
//função que habilita o botão de finalização do pedido
function habilitarBotao(){
    if(prato && bebida  && sobremesa){
        document.querySelector(".botao-fechar-pedido").classList.add("habilitar-botao-pedido");
        document.querySelector(".selecionar-pedidos").classList.add("nao-habilitado");
        document.querySelector(".texto-pedido").classList.add("habilitado");
    }
}
