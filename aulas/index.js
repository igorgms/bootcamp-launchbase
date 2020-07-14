const classA = [
    {
        name: 'Igor',
        grade: 1.8
    },
    {
        name: 'Marcos',
        grade: 10
    },
    {
        name: 'Diego',
        grade: 2
    },
    {
        name: 'Murilo',
        grade: 4
    }

]

const classB = [
    {
        name: 'Igor',
        grade: 9.8
    },
    {
        name: 'Julis',
        grade: 7
    },
    {
        name: 'Gabriel',
        grade: 8
    },
    {
        name: 'Maicon',
        grade: 4
    }

]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {

    if (average > 5) {
        console.log(`${turma} average: ${average.toFixed(2)}. Congratulations!`)
    } else {
        console.log(`${turma} average: ${average.toFixed(2)}.Is not good.`)
    }
}

function markAsFlunked(student) {
    
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)