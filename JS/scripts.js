//Variáveis globais - elementos das opções selecionadas
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
    habilitarBotao();
}
 //função que verifica e seleciona uma bebida
function selecionarBebiba(elemento){
    let bebidaSelecionada = document.querySelector(".selecionado-bebida");
    let iconeSelecionado = document.querySelector(".icone-clicado-bebida");
    if(bebidaSelecionada !== null && iconeSelecionado !== null){
        bebidaSelecionada.classList.remove("selecionado-bebida");
        iconeSelecionado.classList.remove("icone-clicado-bebida");
    }
    elemento.classList.add("selecionado-bebida");
    elemento.querySelector("ion-icon").classList.add("icone-clicado-bebida");
    bebida=elemento;
    habilitarBotao();
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
    habilitarBotao();
}
//função que habilita o botão de finalização do pedido
function habilitarBotao(){
    if(prato && bebida  && sobremesa){
        document.querySelector(".botao-fechar-pedido").classList.add("habilitar-botao-pedido");
        document.querySelector(".selecionar-pedidos").classList.add("nao-habilitado");
        document.querySelector(".texto-pedido").classList.add("habilitado");
        linkWhatsapp();
    }
}
//função que devolve o valor do item selecionado dentro do padrão esperado para o texto no whatsapp  
function valorItem(elemento){
   let valorstring=elemento.querySelector(".preco").innerHTML;
   let valornumerico=Number(converterMoeda(valorstring));
   return valornumerico;
}
//função que converte o valor em string da opção escolhida em uma string que possa ser convertida em valor numerico
function converterMoeda(string){
    return string.replace('R$ ','').replace(',','.');
} 
//função que encodifiaca a mensagem do whatssapp e modifica o elemento clicado com o link
function linkWhatsapp(){
    let valorprato=valorItem(prato);
    let valorbebida=valorItem(bebida);
    let valorsobremesa=valorItem(sobremesa);
    let valortotal=valorprato+valorbebida+valorsobremesa;
    valortotal=valortotal.toFixed(2);
    valortotal=`R$ ${valortotal}`;
    let nomeprato=prato.querySelector(".titulo-do-item").innerHTML;
    let nomebebida=bebida.querySelector(".titulo-do-item").innerHTML;
    let nomesobremesa=sobremesa.querySelector(".titulo-do-item").innerHTML;
    let texto=`Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: ${valortotal}`;
    let link=`https://wa.me/5521968045123?text=${encodeURIComponent(texto)}`;
    document.querySelector(".link-whatsapp").setAttribute("href", link );
}