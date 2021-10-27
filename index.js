const http = require('http');
const fs = require('fs');
const url = require('url');

const renderPage = (pathname, res) => {
    fs.readFile(pathname, null, (err, data) => {
        if(err){
            res.writeHead(404);
            res.write('404 mistake')
        }else{
            res.write(data);
        }

        res.end();
    })
}

const server = http.createServer((req, res) => {
    const filename = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/html"})

    switch(filename){
        case '/': 
            renderPage('./index.html', res);
            break;
        case '/about':
            renderPage('./about.html', res);
            break;
        case '/contact-me':
            renderPage('./contact-me.html', res);
            break;
        default: 
            renderPage('./404.html', res);
            break;
    }
    
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('working'))