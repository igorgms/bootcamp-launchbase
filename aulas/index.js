const alunosDaTurmaA = [
    {
        nome: 'Igor',
        nota: 9.8
    },
    {
        nome: 'Marcos',
        nota: 10
    },
    {
        nome: 'Diego',
        nota: 2
    }, 
    {
        nome: 'Murilo',
        nota: 8
    }

]

const alunosDaTurmaB = [
    {
        nome: 'Igor',
        nota: 9.8
    },
    {
        nome: 'Julis',
        nota: 7
    },
    {
        nome: 'Gabriel',
        nota: 4
    },
    {
        nome: 'Maicon',
        nota: 5
    }

]

function calculaMedia(alunos){
    let nota = 0
    for (let i = 0; i < alunos.length; i++){
            nota += alunos[i].nota
    }

    const media = nota / alunos.length
    return media
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media){
    if (media >= 6){
        console.log(`A média foi de ${media.toFixed(2)}. Parabéns!`)
    } else {
        console.log(`A média foi de ${media.toFixed(2)}. Reprovado!`)
    }
}

enviaMensagem(media1)
enviaMensagem(media2)