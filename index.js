const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.render('home')
})

app.set('views', path.join(__dirname, 'views'))
app.listen(port, (err) => {
    if (err) {
        console.log('Não foi possivel iniciar o servidor do Curriculo Tulio')
    }else{
        console.log('Servidor do Curriculo Tulio rodando...')
    }

})