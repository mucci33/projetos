//criando um variável, espaço de memória que armazena um valor
var jogador = "x";

//uma função executa alguma ação, quando chamada
//celula é um parâmetro, o valor da celular clicada é passado para a função
function jogar(celula){

    //se a célula estiver vazia, pode marcar
    // == iGUAL
    // != DIFERENTE
    //  > MAIOR
    //  < MENOR
    if(celula.innerHTML == ""){
        //escrever na célula o "X" ou "O"
        celula.innerHTML = jogador;
        //se jogador for igual a "X"
        if(jogador == "x"){
            jogador = "o";      //alterna a váriavel para "O"
            celula.style.backgroundColor = "rgba(78, 11, 109, 0.863)"; //altera cor do fundo
            celula.style.color = "ocian";         //altera cor da letra
        }  else {
            jogador = "x";      //se não alterna a váriavel para "X"
            celula.style.backgroundColor = "rgba(78, 11, 109, 0.863)";
            celula.style.color = "ocian";

        }
    }   
}

function reiniciar(){
    //criar lista com todos os quadrados
    var celulas = document.querySelectorAll("td")

    for(var contador=0; contador<9; contador ++){
    celulas[contador].innerHTML = "";
    celulas[contador].style.backgroundColor = "";
    }
}

//lista / vetor
//                  0            1         2         3
var nomes = ['Lebron James' , 'Mucci' , 'Messi' , 'Lolly'];


function sortear(){
    // entre aspas é ums string: tipo de dados de texto

    var nome1 = nomes[ Math.floor( Math.random() * nomes.length) ];
    var nome2 = nomes[ Math.floor( Math.random() * nomes.length) ];

    
    if(nome1 === nome2){
        sortear();
    }
    else{
    alert("jogador: " + nome1 + " VS " + nome2)
    //escrever na tela 
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;
    }
    
    /*
    alert("sorteio de numero com random" + Math.random());
    alert("encontrando posiçao da lista:" + Math.random() * nomes.length);
    alert("encontrando posiçao da lista 2:" + Math.floor(Math.random() * nomes.length));
    */
   

}

function adicionar(){
    // pega o texto do input com id= "nome"
    var nome = document.getElementById("nome").value;
    // adicionar nome na lista 
    nomes.push(nome);
}
