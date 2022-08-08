let trocaText = document.querySelector('#trocaText')
let containerDireito = document.querySelector('#containerDireito')

containerDireito.addEventListener('click', function(){
    navigator.clipboard.writeText('pixelmonxyz.enxada.host')
    trocaText.style.transition = '0.3s'
    trocaText.textContent = 'Ip copiado com sucesso!'
    trocaText.style.fontSize = '1.01em'
});

