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

let preference = {
        items: [
        {
            title: 'VIP 30 Dias',
            unit_price: 30,
            quantity: 1,
        },
        {
            title: 'VIP 60 Dias',
            unit_price: 60,
            quantity: 1,
        },
        {
            title: 'VIP 90 Dias',
            unit_price: 90,
            quantity: 1,
        }
        ]
    };
    
    mercadopago.preferences.create(preference)
    .then(function(response){
    // Este valor substituirá a string "<%= global.id %>" no seu HTML
        global.id = response.body.id;
    }).catch(function(error){
        console.log(error);
    });




app.get('/', (req, res) =>{
    //page inicial da api
    res.status(200).send({mensagem: 'boas-vindas à API'})
    
});


app.get('/teste/:id', (req, res) =>{

    const {id} = req.params
    /* Para fazer um teste no navegar do metodo digite http://localhost:3000/teste/id_que_quer_enviar */
    console.log("Teste de requisação web, seu id é ", id)
    //teste dp metodo get
    return res.json({
        status: "Get está funcionando"
    })

    
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

