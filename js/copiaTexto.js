let trocaText = document.querySelector('#trocaText')
let containerDireito = document.querySelector('#containerDireito')

containerDireito.addEventListener('click', function(){
    navigator.clipboard.writeText('127.0.0.1')
    trocaText.innerHTML = 'Ip copiado com sucesso!'
    
});

