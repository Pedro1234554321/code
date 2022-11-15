const pessoa = [{
    "nome": "Geisiane", "profissao": "Biomedica"
}]

var nomeSpanVindoDoHtml = document.getElementById("nome")
var profissaoSpandVindoDoHtml = document.getElementById("profissao")

var nome = pessoa[0].nome
var profissao = pessoa[0].profissao



nomeSpanVindoDoHtml.innerHTML = nome
profissaoSpandVindoDoHtml.innerHTML = profissao



