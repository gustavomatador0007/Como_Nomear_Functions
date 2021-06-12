    /*
      *** Como usar os parâmetros nas Functions! ***
    */

    // Como usar os parâmetros de uma forma bem simples,veja:

function usandoParametros(numero)
    {
        console.log(numero)
    }
    usandoParametros(50);

    /* 
     O valor colocado acima, é representado em ordem, ou seja,
     se tivesse outro parâmetro você colocaria uma virgula e esse valor seria dado
     ao segundo parâmetro ex:
    */

function doisParâmetros(numero1,numero2)
    {
        console.log(numero1,numero2)
    }   
    doisParâmetros(40,20);

    // Podemos colocar uma variavel que soma esses dois valores, ex:

function somaNúmeros(numero3,numero4)
    {
        let somar = numero3 + numero4
        console.log(somar)
    }
    somaNúmeros(40,20);
    // Para fazermos outras equações,apenas mudamos o simbolo de + (* , ** , % , / , - )

    // Podemos também passar parâmetros fora dos parênteses da Function, ex:

function foraDosparenteses()
    {
        document.write(arguments)
    }
    foraDosparenteses(1,2,3,4,5);

    // Podemos colocar um parâmetro com valor fixo, caso não seja atribuído nada a ele, veja:

function umParâmetroUsado(numero5,numero6)
    {
        numero6 = numero6 || 0
        console.log(numero5 + numero6)
    }
    umParâmetroUsado(50)
    // O resultado dessa conta será 50, como o numero6 não recebeu valor, foi colocado um 0 nele.



