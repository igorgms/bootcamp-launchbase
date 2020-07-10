const alunos = [
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
    }

]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length

console.log(media.toFixed(2))

for (let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome, alunos[i].nota)
}