const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function checaCss(usuario){

    for(let i = 0; i < usuario.tecnologias.length; i++){
        if (usuario.tecnologias[i] == 'CSS'){
            return true
        }
    }

    return false
}


for (let i = 0; i < usuarios.length; i++){
    if (checaCss(usuarios[i])){
        console.log(`${usuarios[i].nome} trabalha com CSS!`)
    }
}
