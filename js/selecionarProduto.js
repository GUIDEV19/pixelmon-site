let vip30dias = document.getElementById('vip30dias')
let vip60dias = document.getElementById('vip60dias')
let vip90dias = document.getElementById('vip90dias')

let valor = document.getElementById('valor')
let descricaoProduto = document.getElementById('descricaoProduto')

let textoProdutoSelecionado = document.getElementById('produtoSelecionado')

vip30dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 30 DIAS'
    vip30dias.style.backgroundColor = 'lightblue'
    vip30dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 30 dias você garante 1 mês de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$30,00'
    
    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vip60dias.style.border = 'none'
    vip90dias.style.border = 'none'
    vip60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vip90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vip60dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 60 DIAS'
    vip60dias.style.backgroundColor = 'lightblue'
    vip60dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 60 dias você garante 2 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$60,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vip30dias.style.border = 'none'
    vip90dias.style.border = 'none'
    vip30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vip90dias.style.backgroundColor = 'rgb(82, 143, 255)'

})

vip90dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 90 DIAS'
    vip90dias.style.backgroundColor = 'lightblue'
    vip90dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$90,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vip60dias.style.border = 'none'
    vip30dias.style.border = 'none'
    vip60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vip30dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

;

