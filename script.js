

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

    let incremental = 0

    for (let i = +prompt("Escreva um number:"); incremental <= i; incremental++) {

        console.log(incremental);

    }

}
imprimirNumeros()



