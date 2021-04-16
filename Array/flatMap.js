const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Willian',
        nota: 8.1
    }, {
        nome: 'Nathan',
        nota: 7.1
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)