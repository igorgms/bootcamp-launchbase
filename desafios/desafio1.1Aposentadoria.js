const nome = 'Igor'
const sexo = 'F'
const idade = 26
const contribuicao = 35

// Homem pode se aposentar cont 35 e mulher 30
// cont + idade: Homem 95 e mulher 90

const somaCont = idade + contribuicao

if (sexo == 'M' && (contribuicao >= 35 && somaCont >= 95)){
    console.log(`${nome} você já pode se aposentar!`)
} else if (sexo =='F' && (contribuicao >= 30 && somaCont >= 85)){
    console.log(`${nome} você já pode se aposentar!`)
} else {
    console.log(`${nome} você ainda não pode se aposentar!`)
}