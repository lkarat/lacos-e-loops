

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
    let soma = 0;
    for (let nBimestre = 0; nBimestre < notasDoano.length; nBimestre++) {
        for (notas = 0; notas < notasDoano[nBimestre].length; notas++) {
            console.log(notasDoano[nBimestre][notas]);
            soma += notasDoano[nBimestre][notas]
        }
        console.log(`A soma das notas do bimestre ${nBimestre + 1} é: ${soma} e a média do bimestre ${nBimestre + 1} é ${soma / notasDoano[nBimestre].length}`);
        soma = 0
    }
}

function lerNotasForIn() {
    const notasDoano = [
        [8, 6, 9, 2],
        [7, 5, 4, 8],
        [2, 3, 8, 9],
        [7, 1, 9, 8]
    ]
    let soma = 0;
    for (let nBimestre in notasDoano) {
        for (notas = 0; notas < notasDoano[nBimestre].length; notas++) {
            console.log(notasDoano[nBimestre][notas]);
            soma += notasDoano[nBimestre][notas]
        }
        console.log(`A soma das notas do bimestre ${nBimestre + 1} é: ${soma} e a média do bimestre ${nBimestre + 1} é ${soma / notasDoano[nBimestre].length}`);
        soma = 0
    }
}

function lerNotasForOf() {
    const notasDoano = [
        [8, 6, 9, 2],
        [7, 5, 4, 8],
        [2, 3, 8, 9],
        [7, 1, 9, 8]
    ]
    let soma = 0;
    for (let nBimestre in notasDoano) {
        for (let notas of notasDoano[nBimestre]) {
            console.log(notas);

            soma += notas
        }
        console.log(`A soma das notas do bimestre ${+nBimestre + 1} é: ${soma} e a média do bimestre ${+nBimestre + 1} é ${soma / notasDoano[nBimestre].length}`);
        soma = 0
    }
}

const filmes = [
    {
        titulo: 'O Auto da Compadecida',
        ano: 2000,
        diretor: 'Guel Arraes',
        elenco: [
            'Selton Mello',
            'Mateus Nachtergaele',
            'Marco Nanini',
            'Fernanda Montenegro',
        ],
    },
    {
        titulo: 'Carandiru',
        ano: 2001,
        diretor: 'Hector Babenco',
        elenco: [
            'Wagner Moura',
            'José Carlos Vasconcelos',
            'Ailton Graça',
            'Caio Blat',
        ],
    },
    {
        titulo: 'Aquarius',
        ano: 2012,
        diretor: 'Kléber Mendonça Filho',
        elenco: [
            'Sônia Braga',
            'Humberto Carrão',
            'Maeve Jinkings',
            'Bárbara Colen',
        ],
    },
]

// escreva seu código abaixo

for (let index = 0; index < filmes.length; index++) {
    const titulo = filmes[index].titulo
    const ano = filmes[index].ano
    const diretor = filmes[index].diretor
    const elenco = filmes[index].elenco

    for (let i = 0; i < elenco.length; i++) {
        
        
    }
console.log(`${titulo}, de ${ano}, dirigido por ${diretor}, e elenco ${elenco}`);

}




