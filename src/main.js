// const http = require('http')
// const fs = require('fs')
// const mime = require('mime-types')

// let server = http.createServer((req, res) => {
//     let file_path = "./../public"+req.url    
//     if (fs.existsSync(file_path)) {
//         const mime_type = mime.lookup(file_path);
//         res.writeHead(200, {'Content-Type': mime_type+'; charset=utf-8' })
//         const stream = fs.createReadStream(file_path)
//         stream.pipe(res)
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8' })   
//         const stream = fs.createReadStream("./../public/404.html")
//         stream.pipe(res) 
//     }
// })

// const PORT = 3000
// const HOST = 'localhost'

// server.listen( PORT, HOST, () => {
//     console.log(`Сервер запущен: http://${HOST}:${PORT}/index.html`)
// })




const express = require('express')
const app = express()

app.use('/public', express.static('public'));

app.get('/index.html', (req, res) => {
    res.status(200)
    res.sendFile('C:/www/currency-exchange/public/index.html') //основная страница
})

app.get('/css/main.css', (req, res) => {
    res.status(200)
    res.sendFile('C:/www/currency-exchange/public/css/main.css')
})

app.get('/js/index.js', (req, res) => {
    res.status(200)
    res.sendFile('C:/www/currency-exchange/public/js/index.js')
})

app.use((req, res) => {
    res.status(404)
    res.sendFile('C:/www/currency-exchange/public/404.html') //страница 404
})

const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}/index.html`)
})

