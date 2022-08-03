let copiarText =  document.querySelector('#ipServer')
let trocaText = document.querySelector('#trocaText')
let containerDireito = document.querySelector('#containerDireito')

containerDireito.addEventListener('click', function(){
    navigator.clipboard.writeText(copiarText.textContent)
    console.log(copiarText.textContent) 
    trocaText.style.transition = '1.0s all'
    trocaText.innerHTML = 'Ip copiado com sucesso!'
    
});

