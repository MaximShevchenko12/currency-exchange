const http = require('http')
const fs = require('fs')
const mime = require('mime-types')

let server = http.createServer((req, res) => {
    let file_path = "./../public"+req.url    
    if (fs.existsSync(file_path)) {
        const mime_type = mime.lookup(file_path);
        res.writeHead(200, {'Content-Type': mime_type+'; charset=utf-8' })
        const stream = fs.createReadStream(file_path)
        stream.pipe(res)
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8' })   
        const stream = fs.createReadStream("./../public/404.html")
        stream.pipe(res) 
    }
})

const PORT = 3000
const HOST = 'localhost'

server.listen( PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}/index.html`)
})

