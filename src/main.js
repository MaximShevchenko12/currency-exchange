const express = require('express')
const app = express()
const path = require('path')
const rates = require('./rates.json');
const currencies = require('./currencies.json')

app.use('/public', express.static('public'));

app.get('/api/v1/rates', (req, res) => {
    res.json(rates)
    res.sendFile(path.join(__dirname, 'rates.json'))
})

app.get('/api/v1/currencies', (req, res) => {
    res.json(currencies)
    res.sendFile(path.join(__dirname, 'currencies.json'))
    console.log(currencies)
})

app.get('/index.html', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get('/css/main.css', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, '../public/css', 'main.css'))
})

app.get('/js/index.js', (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, '../public/js', 'index.js'))
})

app.use((req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, '../public', '404.html'))
})

const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}/index.html`)
})

