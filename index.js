const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = '.' + q.pathname;

    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});

            return res.end('<h1>404 Not Found</h1>');
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);

        return res.end();
    })
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log('working'))