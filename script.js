

function acertarNumero() {
    let i = +prompt("escreva um número")
    let soma = 0

    while (i != 0) {

        soma = soma + i
        i = +prompt("escreva um número")

    }

    console.log(`Acertou. era 0. A soma dos seus erros deu ${soma}`);

}

function imprimirNumeros() {

    let numeroDousuario = +prompt("Escreva um number:")


    for (i = 0; i <= numeroDousuario; i++) {

        console.log(i);

    }

}

function listar() {
    let lista=["zero","um","dois","tres","quatro","cinco","seis"]

    for(let i=0; i<lista.length; i++){

console.log(`O elemento de índice ${i} é ${lista[i]}`);

    }

}
listar()






