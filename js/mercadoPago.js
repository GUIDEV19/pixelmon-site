var teste = document.querySelectorAll(".produto")
var testinho = document.querySelectorAll('.invisivel')

for(i = 0 ;   i < teste.length ; i++){

    let umaVar = testinho[i].textContent

    teste[i].addEventListener('click', function(){
        fetch(`http://localhost:3000/geraChave/?vip=${umaVar}`).then(function(response) {

            return response.json();

          }).then(function(data) {

            const chave = data.chave
            console.log(chave)
            const mp = new MercadoPago('TEST-175c9ea0-6a24-43f5-b35a-4d9a5c1f7180', {
                locale: 'pt-BR'
            });
            
            mp.checkout({
                preference: {
                    id: chave
                },
                render: {
                    container: '.button',
                    label: 'Comprar',
                }
            });

          }).catch(function() {

            console.log("Houve algum problema!");

          });
        
    })

}
    
