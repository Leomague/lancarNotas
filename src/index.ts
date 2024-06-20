import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const joao = {
    nome: 'Joao',
    email: 'joao@gmail.com',
    senha: '12345'
}

const maria = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    senha: '1234'
}

const ana = {
    nome: 'Ana',
    email: 'ana@gmail.com',
    senha: '123'
}

const professoraMaria = new Professor(maria, 'História')
const alunoJoao = new Aluno(joao)
const alunaAna = new Aluno(ana)

professoraMaria.login('1234')
professoraMaria.lancarNota(alunoJoao, 8)
professoraMaria.lancarNota(alunoJoao, 10)
professoraMaria.lancarNota(alunoJoao, 7)
professoraMaria.lancarNota(alunoJoao, 5)

console.log(alunoJoao.notas)
console.log(alunoJoao.obterMedia())