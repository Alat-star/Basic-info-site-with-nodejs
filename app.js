const http = require('http');
const fs = require('fs');

const homePath = fs.readFileSync('./pages/index.html', 'utf-8')
const aboutPath = fs.readFileSync('./pages/about.html', 'utf-8')
const contactPath = fs.readFileSync('./pages/contact.html', 'utf-8')
const errorPath = fs.readFileSync('./pages/404.html', 'utf-8')

const stylesPath = fs.readFileSync('./public/index.css')

// console.log(homePath);

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePath)
        res.end()
    }
    

    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPath)
        res.end()
    }

    else if (url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(contactPath)
        res.end()
    }

    // else if (url === '/index.css') {
    //     res.writeHead(200, {'content-type': 'text/css'})
    //     res.write(stylesPath)
    //     res.end()
    // }

    else {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(errorPath)
        res.end()
    }
    // console.log('server is running')
    // res.end('<h1>server is running</h1>')
})

server.listen(5000)
