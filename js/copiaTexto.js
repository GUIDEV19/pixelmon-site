let trocaText = document.querySelector('#trocaText')
let containerDireito = document.querySelector('#containerDireito')

containerDireito.addEventListener('click', function(){
    navigator.clipboard.writeText('pixelmonxyz.enxada.host')
    trocaText.innerHTML = 'Ip copiado com sucesso!'
});

