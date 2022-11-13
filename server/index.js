const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mercadopago = require('mercadopago')

const app = express()

const port = 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    app.use(cors())
    next()
})

app.use(bodyParser.json())

mercadopago.configure({
	access_token: "TEST-7001311731677237-082321-0f27bff2dba64b5b3b3e69043e3c96ce-241447996",
});


app.get('/', (req, res) =>{
    //page inicial da api
    res.status(200).send({mensagem: 'boas-vindas à API'})
    
});


app.get('/geraChave/?', (req, res) => {

        var vipQueVeioDaREQ = req.query.vip


        if(vipQueVeioDaREQ  == 'VIPX30'){
            var title = 'VIP X 30 Dias';
            var valor = '241447996-b00e5ed8-1094-439d-bc36-3610cb04e6c5'
        }
        if(vipQueVeioDaREQ  == 'VIPX60'){
            var title = 'VIP X 60 Dias';
            var valor = '241447996-6f318a7d-0a28-45c6-9af7-8803145c0b4c'
        }
        if(vipQueVeioDaREQ  == 'VIPX90'){
            var title = 'VIP X 90 Dias';
            var valor = '241447996-e91cc9df-7712-4913-bb45-b8e7b69c5317'
        }
        if(vipQueVeioDaREQ  == 'VIPY30'){
            var title = 'VIP Y 30 Dias';
            var valor = '241447996-11ad5f24-69c5-4283-9238-fcb51d4cc7e5'
        }
        if(vipQueVeioDaREQ  == 'VIPY60'){
            var title = 'VIP Y 60 Dias';
            var valor = '241447996-2d9d705b-4ac9-4258-b7ef-329e6cdef4a2'
        }
        if(vipQueVeioDaREQ  == 'VIPY90'){
            var title = 'VIP X 90 Dias';
            var valor = '241447996-61b352c8-807f-497a-ac21-cb4f98024e67'
        }
        if(vipQueVeioDaREQ  == 'VIPZ30'){
            var title = 'VIP Z 30 Dias';
            var valor = '241447996-1196b2d9-c381-45f2-9536-ec51cd2c531a'
        }
        if(vipQueVeioDaREQ  == 'VIPZ60'){
            var title = 'VIP Z 90 Dias';
            var valor = '241447996-aa4fbf70-8a1d-441b-ba8c-b83353b01d61'
        }
        if(vipQueVeioDaREQ  == 'VIPZ90'){
            var title = 'VIP Z 90 Dias';
            var valor = '241447996-f5931d49-35a5-450f-9cce-37944d20066e'
        }
        return res.json(valor)


/*         let preference = {
                items: [
                {
                    title: title,
                    unit_price: valor,
                    quantity: 1,
                },
            ]
        }; */


        
        
        /* mercadopago.preferences.create(preference)
        .then(function(response){
        const {id} = response.body;

            console.log(id)
            return res.json({chave: `${id}`})

        }).catch(function(error){

            console.log(error);

        }); */


        
        /* Para fazer um teste no navegar do metodo digite http://localhost:3000/teste/id_que_quer_enviar */
        /* console.log("Teste de requisação web, seu id é ", vipQueVeioDaREQ) */
   
    
    });


app.post('/teste', (req, res)=>{
    //teste do metodo post
    return res.json({
        status: "Post está funcionando"
    })

})

app.put('/teste', (req, res) => {
    //teste do metodo put
    return res.json({
        status: "Put está funcionando"
    })

})

app.delete('/teste', (req, res) => {

    //teste do metodo delete
    return res.json({
        status: "Delete está funcionando"
    })


})
   

app.listen(port, () => console.log(`Servidor está iniciado http://localhost/${port}`))

module.exports = app

