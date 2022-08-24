const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000


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

