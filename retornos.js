/*
   *** Aqui veremos como usar o "return" nas Functions! ***
*/

// A forma mais comum de se usar as o return é da seguinte forma:

function algumNumero(número)
    {
        if(número==0){
            console.log(número)
        }return;
    }
    algumNumero(0)
    // Se o valor colocado for diferente de 0, seja uma string ou qualquer outro número,não aparecerá nada.

    // 
document.addEventListener("click", function cor(){
    document.body.style.background = 'red'})

    // Agora, vamos ver as 2 formas mais comums de mostrar valores das Functions!

    // 1º Forma:
    function Algo(Nome,Idade)
    {
        return (console.log(Nome,Idade))
    }
    Algo('Gustavo',17);


    // 2º Forma:
    function Algo2(Nome2, Idade2)
    {
        return (console.log(Nome2,Idade2))
    }
    let recebimento = {
        Nome:"Gustavo",
        Idade:17,
    }
    Algo2(recebimento);