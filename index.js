const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render('home')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possivel iniciar o servidor do Curriculo Tulio')
    }else{
        console.log('Servidor do Curriculo Tulio rodando...')
    }

})