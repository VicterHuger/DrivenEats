//Variáveis globais  
//elementos das opções selecionadas
let prato;
let bebida;
let sobremesa;
//nome e preço dos itens selecionados
let precoprato;
let precobebida;
let precosobremesa;
let valortotal;
let nomeprato;
let nomebebida;
let nomesobremesa;
//nome e endereco
let nome;
let endereco;
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
    let texto=`Olá, gostaria de fazer o pedido:\n- Prato: ${nomeprato}\n- Bebida: ${nomebebida}\n- Sobremesa: ${nomesobremesa}\nTotal: ${valortotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    let link=`https://wa.me/5521968045123?text=${encodeURIComponent(texto)}`;
    document.querySelector(".link-whatsapp").setAttribute("href", link );
}
//Bonus-função que pede endereço e gera a tela de confirmacao
function enderecoConfirmacao(){
    if(document.querySelector(".botao-fechar-pedido").classList.contains("habilitar-botao-pedido")){
        nome=prompt(`Olá! Já iremos processar seu pedido! Primeiro, nos diga, qual seu nome?`);
        endereco=prompt(`Certo, ${nome}! Estamos quase lá! Nos diga agora, qual o endereço de entrega do pedido? Escreva no seguinte formato: Rua xxxxxx, nº, complemento, CEP`); 
        if(nome && endereco){
            document.querySelector(".tela-de-confirmacao").classList.remove("nao-habilitado");
            let valorprato=valorItem(prato);
            let valorbebida=valorItem(bebida);
            let valorsobremesa=valorItem(sobremesa);
            valortotal=valorprato+valorbebida+valorsobremesa;
            valortotal=valortotal.toFixed(2);
            valortotal=`R$ ${valortotal}`;
            valortotalvirgula=valortotal.replace('.',',');
            precoprato=prato.querySelector(".preco").innerHTML;
            precobebida=bebida.querySelector(".preco").innerHTML;
            precosobremesa=sobremesa.querySelector(".preco").innerHTML;
            nomeprato=prato.querySelector(".titulo-do-item").innerHTML;
            nomebebida=bebida.querySelector(".titulo-do-item").innerHTML;
            nomesobremesa=sobremesa.querySelector(".titulo-do-item").innerHTML;
            document.querySelector(".item-prato").innerHTML=nomeprato;
            document.querySelector(".preco-prato").innerHTML=precoprato;
            document.querySelector(".item-bebida").innerHTML=nomebebida;
            document.querySelector(".preco-bebida").innerHTML=precobebida;
            document.querySelector(".item-sobremesa").innerHTML=nomesobremesa;
            document.querySelector(".preco-sobremesa").innerHTML=precosobremesa;
            document.querySelector(".preco-total").innerHTML=valortotalvirgula;
            linkWhatsapp();
        }
    }   
}
function cancelarPedido(){
    document.querySelector(".tela-de-confirmacao").classList.add("nao-habilitado")
}