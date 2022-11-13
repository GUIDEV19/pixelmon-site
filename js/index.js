var button = document.querySelector('.button')

button.addEventListener('click', () => {
    const VIPX30_DIV = document.querySelector('#vipx30dias')
    const VIPX30_VALUE = document.querySelectorAll('.invisivel')
    

});
















var teste = document.querySelectorAll(".produto")
var testinho = document.querySelectorAll('.invisivel')


for(i = 0 ;   i < teste.length ; i++){
    let umaVar = testinho[i].textContent
    teste[i].addEventListener('click', async function(){
        
            async function rota(){
                try{
                    const chave = await fetch(`http://localhost:3000/geraChave/?vip=${umaVar}`)
                    const abc = await chave.json()
                    console.log(abc)

                    const mp = new MercadoPago('TEST-175c9ea0-6a24-43f5-b35a-4d9a5c1f7180', {
                        locale: 'pt-BR'
                    })
                    const VIPX30 = mp.checkout({
                        preference: {
                            id: abc.chave 
                        }
                        
                    })

                    abc.status == true ? button.addEventListener('click', () =>{
                            VIPX30.open()
                        }) : console.log('falhou')
                    
                    abc.chave = ''
                }catch(e){
                    console.log('Erro inesperado' + e)
                }
                
            }
            
            rota()

       
    });
        
}
    

              