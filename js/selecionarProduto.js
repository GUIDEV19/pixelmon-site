

let vipx30dias = document.getElementById('vipx30dias')
let vipx60dias = document.getElementById('vipx60dias')
let vipx90dias = document.getElementById('vipx90dias')

let vipy30dias = document.getElementById('vipy30dias')
let vipy60dias = document.getElementById('vipy60dias')
let vipy90dias = document.getElementById('vipy90dias')

let vipz30dias = document.getElementById('vipz30dias')
let vipz60dias = document.getElementById('vipz60dias')
let vipz90dias = document.getElementById('vipz90dias')

let valor = document.getElementById('valor')
let descricaoProduto = document.getElementById('descricaoProduto')

let textoProdutoSelecionado = document.getElementById('produtoSelecionado')



vipx30dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 30 DIAS'
    vipx30dias.style.backgroundColor = 'lightblue'
    vipx30dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 30 dias você garante 1 mês de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$20,00'
    
    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy30dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy90dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipx60dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 60 DIAS'
    vipx60dias.style.backgroundColor = 'lightblue'
    vipx60dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 60 dias você garante 2 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$38,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy30dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy90dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'

})

vipx90dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 90 DIAS'
    vipx90dias.style.backgroundColor = 'lightblue'
    vipx90dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$55,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'

    vipy30dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy90dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipy30dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 30 DIAS'
    vipy30dias.style.backgroundColor = 'lightblue'
    vipy30dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$30,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy60dias.style.border = 'none'
    vipy90dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipy60dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 60 DIAS'
    vipy60dias.style.backgroundColor = 'lightblue'
    vipy60dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$57,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy30dias.style.border = 'none'
    vipy90dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipy90dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 90 DIAS'
    vipy90dias.style.backgroundColor = 'lightblue'
    vipy90dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$83,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy60dias.style.border = 'none'
    vipy30dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipz30dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 30 DIAS'
    vipz30dias.style.backgroundColor = 'lightblue'
    vipz30dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$50,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy90dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy30dias.style.border = 'none'

    vipz60dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipz60dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 60 DIAS'
    vipz60dias.style.backgroundColor = 'lightblue'
    vipz60dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$95,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy90dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy30dias.style.border = 'none'

    vipz30dias.style.border = 'none'
    vipz90dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz90dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

vipz90dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 90 DIAS'
    vipz90dias.style.backgroundColor = 'lightblue'
    vipz90dias.style.border = '3px solid yellow'

    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    valor.innerHTML = 'R$137,00'

    //Tirar as formatações dos outros (tirar a borda e voltar a cor de fundo ao normal)
    vipx60dias.style.border = 'none'
    vipx30dias.style.border = 'none'
    vipx90dias.style.border = 'none'

    vipy90dias.style.border = 'none'
    vipy60dias.style.border = 'none'
    vipy30dias.style.border = 'none'

    vipz60dias.style.border = 'none'
    vipz30dias.style.border = 'none'

    vipx90dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipx30dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipy30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy60dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipy90dias.style.backgroundColor = 'rgb(82, 143, 255)'

    vipz30dias.style.backgroundColor = 'rgb(82, 143, 255)'
    vipz60dias.style.backgroundColor = 'rgb(82, 143, 255)'
})

;

