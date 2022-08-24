const express = require('express')
const bodyParser = require('body-parser')
const mercadopago = require('mercadopago')

const app = express()

app.use(bodyParser.json())

const port = 3000

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
    //page inicia da api
    res.status(200).send({mensagem: 'boas-vindas à API'})
    
});


app.get('/teste', (req, res) =>{
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
   

app.listen(port, () => console.log('servidor rodando na porta ' + port))

module.exports = app

