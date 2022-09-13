

let vipx30dias = document.getElementById('vipx30dias')
let vipx60dias = document.getElementById('vipx60dias')
let vipx90dias = document.getElementById('vipx90dias')

let vipy30dias = document.getElementById('vipy30dias')
let vipy60dias = document.getElementById('vipy60dias')
let vipy90dias = document.getElementById('vipy90dias')

let vipz30dias = document.getElementById('vipz30dias')
let vipz60dias = document.getElementById('vipz60dias')
let vipz90dias = document.getElementById('vipz90dias')

let containerBeneficios = document.querySelector(".containerBeneficios")

let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let b10 = document.querySelector(".b10");
let b11 = document.querySelector(".b11");
let b12 = document.querySelector(".b12");
let b13 = document.querySelector(".b13");
let b14 = document.querySelector(".b14");
let b15 = document.querySelector(".b15");
let b16 = document.querySelector(".b16");
let b17 = document.querySelector(".b17");
let b18 = document.querySelector(".b18");
let b19 = document.querySelector(".b19");
let b20 = document.querySelector(".b20");
let b21 = document.querySelector(".b21");
let b22 = document.querySelector(".b22");
let b23 = document.querySelector(".b23");
let b24 = document.querySelector(".b24");
let b25 = document.querySelector(".b25");
let b26 = document.querySelector(".b26");

let c1 = document.querySelector(".c1")
let c2 = document.querySelector(".c2")
let c3 = document.querySelector(".c3")
let c4 = document.querySelector(".c4")
let c5 = document.querySelector(".c5")
let c6 = document.querySelector(".c6")
let c7 = document.querySelector(".c7")
let c8 = document.querySelector(".c8")
let c9 = document.querySelector(".c9")

let valor = document.getElementById('valor')
let descricaoProduto = document.getElementById('descricaoProduto')

let textoProdutoSelecionado = document.getElementById('produtoSelecionado')



vipx30dias.addEventListener('click', function(){
    //Mudar texto, valor e produto selecionado
    textoProdutoSelecionado.innerHTML = 'VIP 30 DIAS'
    vipx30dias.style.backgroundColor = 'lightblue'
    vipx30dias.style.border = '3px solid yellow'
    vipx30dias.style.transition = '0.3s all'
    containerBeneficios.style.transition = '0.3s all'
    
    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 10 Great's"
    b3.innerHTML = "♣ 8 Ultra"
    b4.innerHTML = "♣ 8 Rare Candy"
    b5.innerHTML = ""
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 30 Pokebolas"
    b8.innerHTML = "♣ 20 Great's"
    b9.innerHTML = "♣ 15 Ultras"
    b10.innerHTML = "♣ 16 Rare Candy"
    b11.innerHTML = "♣ 15 Dusk Ball"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 10 Thuder stone"
    b15.innerHTML = "♣ 10 Water stone"
    b16.innerHTML = "♣ 10 Fire"
    b17.innerHTML = "♣ 16 Diamantes"
    b18.innerHTML = "♣ 1 Bloco de diamante"
    b19.innerHTML = "♣ 1 Master Ball"
    b20.innerHTML = "♣ Armadura de dusk"
    b21.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b22.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b23.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b24.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b25.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b26.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

    //comandos
    c1.innerHTML = "♣ Sem Warp VIP"
    c2.innerHTML = "♣ Acesso à KIT diário, semanal e mensal"
    c3.innerHTML = "♣ Limite de 4 homes"
    c4.innerHTML = "♣ Comando /fix"
    c5.innerHTML = "♣ Comando /fly"
    c6.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c7.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c8.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c9.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

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
    vipx60dias.style.transition = '0.3s all'
    containerBeneficios.style.transition = '0.3s all'



    descricaoProduto.textContent = 'Comprando o VIP de 60 dias você garante 2 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 10 Great's"
    b3.innerHTML = "♣ 8 Ultra"
    b4.innerHTML = "♣ 8 Rare Candy"
    b5.innerHTML = ""
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 30 Pokebolas"
    b8.innerHTML = "♣ 20 Great's"
    b9.innerHTML = "♣ 15 Ultras"
    b10.innerHTML = "♣ 16 Rare Candy"
    b11.innerHTML = "♣ 15 Dusk Ball"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 10 Thuder stone"
    b15.innerHTML = "♣ 10 Water stone"
    b16.innerHTML = "♣ 10 Fire"
    b17.innerHTML = "♣ 16 Diamantes"
    b18.innerHTML = "♣ 1 Bloco de diamante"
    b19.innerHTML = "♣ 1 Master Ball"
    b20.innerHTML = "♣ Armadura de dusk"
    b21.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b22.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b23.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b24.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b25.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b26.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

    //comandos
    c1.innerHTML = "♣ Sem Warp VIP"
    c2.innerHTML = "♣ Acesso à KIT diário, semanal e mensal"
    c3.innerHTML = "♣ Limite de 4 homes"
    c4.innerHTML = "♣ Comando /fix"
    c5.innerHTML = "♣ Comando /fly"
    c6.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c7.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c8.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c9.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    

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
    vipx90dias.style.transition = '0.3s all'
    containerBeneficios.style.transition = '0.3s all'



    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 10 Great's"
    b3.innerHTML = "♣ 8 Ultra"
    b4.innerHTML = "♣ 8 Rare Candy"
    b5.innerHTML = ""
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 30 Pokebolas"
    b8.innerHTML = "♣ 20 Great's"
    b9.innerHTML = "♣ 15 Ultras"
    b10.innerHTML = "♣ 16 Rare Candy"
    b11.innerHTML = "♣ 15 Dusk Ball"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 10 Thuder stone"
    b15.innerHTML = "♣ 10 Water stone"
    b16.innerHTML = "♣ 10 Fire"
    b17.innerHTML = "♣ 16 Diamantes"
    b18.innerHTML = "♣ 1 Bloco de diamante"
    b19.innerHTML = "♣ 1 Master Ball"
    b20.innerHTML = "♣ Armadura de dusk"
    b21.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b22.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b23.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b24.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b25.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b26.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

    //comandos
    c1.innerHTML = "♣ Sem Warp VIP"
    c2.innerHTML = "♣ Acesso à KIT diário, semanal e mensal"
    c3.innerHTML = "♣ Limite de 4 homes"
    c4.innerHTML = "♣ Comando /fix"
    c5.innerHTML = "♣ Comando /fly"
    c6.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c7.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c8.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c9.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

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
    vipx30dias.style.transition = '0.3s all'
    containerBeneficios.style.transition = '0.3s all'



    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 20 Great's"
    b3.innerHTML = "♣ 20 Ultras"
    b4.innerHTML = "♣ 10 Dusk"
    b5.innerHTML = "♣ 16 Rare Candy"
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 45 Pokebolas"
    b8.innerHTML = "♣ 25 Great's"
    b9.innerHTML = "♣ 25 Ultras"
    b10.innerHTML = "♣ 15 Dusk Ball"
    b11.innerHTML = "♣ 32 Rare Candy"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 64 Pokebolas"
    b15.innerHTML = "♣ 15 Water stone"
    b16.innerHTML = "♣ 15 Fire"
    b17.innerHTML = "♣ 15 Thunder"
    b18.innerHTML = "♣ 32 Diamantes"
    b19.innerHTML = "♣ 5 Blocos de Diamante"
    b20.innerHTML = "♣ 3 Master ball"
    b21.innerHTML = "♣ Armadura Thunder"
    b22.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b23.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b24.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b25.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b26.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    valor.innerHTML = 'R$30,00'

    //comandos
    c1.innerHTML = "♣ Sem Warp VIP"
    c2.innerHTML = "♣ Acesso à KIT diário, semanal e mensal"
    c3.innerHTML = "♣ Limite de 4 homes"
    c4.innerHTML = "♣ Comando /fix"
    c5.innerHTML = "♣ Comando /fly"
    c6.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c7.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c8.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    c9.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

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
    containerBeneficios.style.transition = '0.3s all'


    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 20 Great's"
    b3.innerHTML = "♣ 20 Ultras"
    b4.innerHTML = "♣ 10 Dusk"
    b5.innerHTML = "♣ 16 Rare Candy"
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 45 Pokebolas"
    b8.innerHTML = "♣ 25 Great's"
    b9.innerHTML = "♣ 25 Ultras"
    b10.innerHTML = "♣ 15 Dusk Ball"
    b11.innerHTML = "♣ 32 Rare Candy"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 64 Pokebolas"
    b15.innerHTML = "♣ 15 Water stone"
    b16.innerHTML = "♣ 15 Fire"
    b17.innerHTML = "♣ 15 Thunder"
    b18.innerHTML = "♣ 32 Diamantes"
    b19.innerHTML = "♣ 5 Blocos de Diamante"
    b20.innerHTML = "♣ 3 Master ball"
    b21.innerHTML = "♣ Armadura Thunder"
    b22.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b23.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b24.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b25.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"
    b26.innerHTML = "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ"

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
    containerBeneficios.style.transition = '0.3s all'


    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 30 Pokebolas"
    b2.innerHTML = "♣ 20 Great's"
    b3.innerHTML = "♣ 20 Ultras"
    b4.innerHTML = "♣ 10 Dusk"
    b5.innerHTML = "♣ 16 Rare Candy"
    b6.innerHTML = ""
    //semanal
    b7.innerHTML = "♣ 45 Pokebolas"
    b8.innerHTML = "♣ 25 Great's"
    b9.innerHTML = "♣ 25 Ultras"
    b10.innerHTML = "♣ 15 Dusk Ball"
    b11.innerHTML = "♣ 32 Rare Candy"
    b12.innerHTML = ""
    b13.innerHTML = ""
    
    //mensal
    b14.innerHTML = "♣ 64 Pokebolas"
    b15.innerHTML = "♣ 15 Water stone"
    b16.innerHTML = "♣ 15 Fire"
    b17.innerHTML = "♣ 15 Thunder"
    b18.innerHTML = "♣ 32 Diamantes"
    b19.innerHTML = "♣ 5 Blocos de Diamante"
    b20.innerHTML = "♣ 3 Master ball"
    b21.innerHTML = "♣ Armadura Thunder"

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
    containerBeneficios.style.transition = '0.3s all'


    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 40 Pokebolas"
    b2.innerHTML = "♣ 40 Great's"
    b3.innerHTML = "♣ 40 Ultras"
    b4.innerHTML = "♣ 25 Dusk"
    b5.innerHTML = "♣ 32 Rare Candy"
    b6.innerHTML = "♣ 16 Luxury Ball"
    //semanal
    b7.innerHTML = "♣ 64 Pokebolas"
    b8.innerHTML = "♣ 64 Great's"
    b9.innerHTML = "♣ 64 Ultras"
    b10.innerHTML = "♣ 1 Beast Ball"
    b11.innerHTML = "♣ 1 Master Ball"
    b12.innerHTML = "♣ 32 Prime Ball"
    b13.innerHTML = "♣ 16 Luxury Ball"
    
    //mensal
    b14.innerHTML = "♣ 1 Super Roald"
    b15.innerHTML = "♣ 20 Thunder Stone"
    b16.innerHTML = "♣ 20 Fire"
    b17.innerHTML = "♣ 20 Water"
    b18.innerHTML = "♣ 20 Dusk Diamantes"
    b19.innerHTML = "♣ 10 Blocos de Diamante"
    b20.innerHTML = "♣ 32 Diamantes"
    b21.innerHTML = "♣ Golden Lens"
    b22.innerHTML = "♣ 5 Master"
    b23.innerHTML = "♣ 1 Ranch Block"
    b24.innerHTML = "♣ 1 Destiny Knot"
    b25.innerHTML = "♣ 1 Everstone"
    b26.innerHTML = "♣ Templo Arceus"

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
    containerBeneficios.style.transition = '0.3s all'


    descricaoProduto.textContent = 'Comprando o VIP de 90 dias você garante 3 meses de muitos benefícios! Usufrua de todas as vantagens VIP e ajude o servidor a continuar gratuito e com constantes atualizações.'

    b1.innerHTML = "♣ 40 Pokebolas"
    b2.innerHTML = "♣ 40 Great's"
    b3.innerHTML = "♣ 40 Ultras"
    b4.innerHTML = "♣ 25 Dusk"
    b5.innerHTML = "♣ 32 Rare Candy"
    b6.innerHTML = "♣ 16 Luxury Ball"
    //semanal
    b7.innerHTML = "♣ 64 Pokebolas"
    b8.innerHTML = "♣ 64 Great's"
    b9.innerHTML = "♣ 64 Ultras"
    b10.innerHTML = "♣ 1 Beast Ball"
    b11.innerHTML = "♣ 1 Master Ball"
    b12.innerHTML = "♣ 32 Prime Ball"
    b13.innerHTML = "♣ 16 Luxury Ball"
    
    //mensal
    b14.innerHTML = "♣ 1 Super Roald"
    b15.innerHTML = "♣ 20 Thunder Stone"
    b16.innerHTML = "♣ 20 Fire"
    b17.innerHTML = "♣ 20 Water"
    b18.innerHTML = "♣ 20 Dusk Diamantes"
    b19.innerHTML = "♣ 10 Blocos de Diamante"
    b20.innerHTML = "♣ 32 Diamantes"
    b21.innerHTML = "♣ Golden Lens"
    b22.innerHTML = "♣ 5 Master"
    b23.innerHTML = "♣ 1 Ranch Block"
    b24.innerHTML = "♣ 1 Destiny Knot"
    b25.innerHTML = "♣ 1 Everstone"
    b26.innerHTML = "♣ Templo Arceus"
    
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

    b1.innerHTML = "♣ 40 Pokebolas"
    b2.innerHTML = "♣ 40 Great's"
    b3.innerHTML = "♣ 40 Ultras"
    b4.innerHTML = "♣ 25 Dusk"
    b5.innerHTML = "♣ 32 Rare Candy"
    b6.innerHTML = "♣ 16 Luxury Ball"
    //semanal
    b7.innerHTML = "♣ 64 Pokebolas"
    b8.innerHTML = "♣ 64 Great's"
    b9.innerHTML = "♣ 64 Ultras"
    b10.innerHTML = "♣ 1 Beast Ball"
    b11.innerHTML = "♣ 1 Master Ball"
    b12.innerHTML = "♣ 32 Prime Ball"
    b13.innerHTML = "♣ 16 Luxury Ball"
    
    //mensal
    b14.innerHTML = "♣ 1 Super Roald"
    b15.innerHTML = "♣ 20 Thunder Stone"
    b16.innerHTML = "♣ 20 Fire"
    b17.innerHTML = "♣ 20 Water"
    b18.innerHTML = "♣ 20 Dusk Diamantes"
    b19.innerHTML = "♣ 10 Blocos de Diamante"
    b20.innerHTML = "♣ 32 Diamantes"
    b21.innerHTML = "♣ Golden Lens"
    b22.innerHTML = "♣ 5 Master"
    b23.innerHTML = "♣ 1 Ranch Block"
    b24.innerHTML = "♣ 1 Destiny Knot"
    b25.innerHTML = "♣ 1 Everstone"
    b26.innerHTML = "♣ Templo Arceus"

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

