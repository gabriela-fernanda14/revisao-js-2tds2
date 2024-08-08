//preciso verificar se a idade do aluno é maior que 7 anos

//infantil para alunos  entre 8 e 12 anos
//adolescentes para alunos entre 13 e 17 anos
//adulto para alunos maiores que 18 anos 

let idadeAluno = 102;

if (idadeAluno > 7 && idadeAluno < 13){
    console.log("infantil")
} else if (idadeAluno >=13 && idadeAluno < 18){
    console.log("adolescentes")
} else if (idadeAluno > 17 ) {
    console.log("adulto")
} else {
    console.log ( "nao pode ")
}
