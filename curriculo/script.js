var visitante = 2000;
var nome = "mucci";

//se o visitante= 2000 ganha o premio
if(visitante === 2000){
    // alert("PARABÉNS, VOCÊ GANHO UMA NOITE COM O MUCCI TUDO PAGO (POR VOCÊ)")

}else{
    alert("perdeu hahaha!!!");
}
/*comentario*/
//obtem o componente do menu do cell(icone)
var celular = document.querySelector('.celular');
//obter a lista 
var listaMenu = document.querySelector('.menu ul');
//evento do click do menu
celular.addEventListener('click', function(){

listaMenu.classList.toggle('mostraMenu');    
});
