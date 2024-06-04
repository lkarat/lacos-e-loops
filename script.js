

function acertarNumero() {
    let nUsuario = +prompt("escreva um número")//Nesse caso, o nUsuario serve para receber o número do usuário
    let soma = 0

    while (nUsuario != 0) {

        soma = soma + nUsuario
        nUsuario = +prompt("escreva um número")

    }

    console.log(`Acertou. era 0. A soma dos seus erros deu ${soma}`);

}

function imprimirNumeros() {

    let numeroDousuario = +prompt("Escreva um number:")


    for (let i = 0; i <= numeroDousuario; i++) {

        console.log(i);

    }

}


function listar() {
    let lista = ["zero", "um", "dois", "tres", "quatro", "cinco", "seis"]

    for (let i = 0; i < lista.length; i++) {

        console.log(`O elemento de índice ${i} é ${lista[i]}`);

    }

}

function lerNotas() {

    const notasDoano = [
        [8, 6, 9, 2],
        [7, 5, 4, 8],
        [2, 3, 8, 9],
        [7, 1, 9, 8]
    ]
    let soma=0
    ;
    for(let nBimestre=0; nBimestre<notasDoano.length; nBimestre++) {
        for(notas=0; notas<notasDoano[nBimestre].length;notas++){
            console.log(notasDoano[nBimestre][notas]);

            soma = soma + notasDoano[nBimestre][notas]
            
            /*console.log(`A soma do bimestre .... é... a média do bimestre .... é ...`);*/
            
        }
        
        
        
        console.log(soma)
        
    }
        


}


lerNotas()










