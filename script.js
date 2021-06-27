/* 

var hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu")
})

*/

/*
Esta função está adicionando dinamicamente com o JS uma nova classe. Ele pega 
a classe ".sidebar" (depois mudou para ".container" porque precisou de fazer isso 
várias vezes, aí pra não ficar escrevendo várias pequenas funçoes pra cada 
classe dentro do container, fez com o container aí faz só uma vez) 
através de uma lista "classList" e adiciona uma nova classe a ela 
que nesse caso é "show-menu". Toda vez que for adicionado essa classe, lá pelo 
CSS eu coloco right = 0 que vai aparecer o menu (sem esse "show-menu" right está -20,
ou seja, está escondido).
Pelo que entendi, essa classe "show-menu", foi adicionada por aqui mesmo,
não tem no html. Quando eu clico no hamburger, no html aparece a linha:
 <div class="sidebar show-menu"> no inspect do chrome


Posso simplificar a função acima. Não preciso criar uma variável "hamburger", posso chamar direto a classe:

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu")
})

Posso simplificar mais. Como a função não tem nome, substituo por uma arrow function:
*/

document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")

);


//Cálculo do orçamento

// Regras para o cálculo:

/*
Valor por página: R$ 100,00
Script:           10% do custo das páginas
Layout:           R$ 500,00
Urgência:         10% do custo total por semana
  */

/* 
eu preciso dessa função atualizarPreco pra atualizar sempre que houver uma modificação no valor da label
ou seja, sempre que houver uma mudança ("change") ele vai chamar a função. O change é pra funcionar tanto se 
eu escrever o valor quanto pra se eu mudar pelo seletor (pro click não funcionaria). Tenho que fazer isso 
pra todas as variáveis que eu chamar porque todas precisam ser atualizadas.
*/

document.querySelector('#qtde').addEventListener("change", atualizarPreco)
document.querySelector('#js').addEventListener("change", atualizarPreco)
document.querySelector('#layout-sim').addEventListener("change", atualizarPreco)
document.querySelector('#layout-nao').addEventListener("change", atualizarPreco)
document.querySelector('#prazo').addEventListener("change", function () {
    const prazo = document.querySelector('#prazo').value

    if (prazo == 1) {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: 1 semana`
    }
    else {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizarPreco()
})

function atualizarPreco() {
    const qtde = document.querySelector('#qtde').value
    const temJS = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value
    let preco = qtde * 100
    if (temJS) preco *= 1.1 // *1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia
    document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`
}

/*

*1 Calculando 10% a mais de acordo com a regra.

a forma sem abreviar seria

if (temJS) {
    preço = preco + (preco * 0.1)
}

ou

if (temJS) {
    preço = preco * 1.1
}

ou

if (temJS) {
    preço *= 1.1
}

nesse caso não precisa das chaves, então

if (temJS) preço *= 1.1



*/

