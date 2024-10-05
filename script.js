//Seleciona elementos para serem manipulados 
const botao = document.getElementById ("botaoInteragir");
const mensagem = document.getElementById ("mensagem");
 
//Adicione um evento de clique ao botão
botao.addEventListener ("click", ()=>{
    //Solicite o nome do novo membro
    let nome = prompt ("informe seu nome");

    //Condição para verificação do nome 
    if (nome){

 
        //Pergunta a região que o membro deseja receber as promoções
         let região = prompt ("Região onde reside?");

         //Sites que gostaria de receber promoções 
         let sites = prompt ("Quais sites gostaria de receber promoções");

         //Quais países de envio
         let países = prompt ("Busca envio nacional e internacional?");

         //Digitação para confirmação
         let confirmação = prompt ("Digite *sim* para garantir sua vaga no grupo");


    }

});
