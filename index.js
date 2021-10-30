const express = require('express');
const app = express();
const fs = require('fs');
const port = 8000;

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

app.get('/', (req, res) => {
    renderPage('./index.html', res);
})

app.get('/about', (req, res) => {
    renderPage('./about.html', res);
})

app.get('/contact-me', (req, res) => {
    renderPage('./contact-me.html', res);
})

app.get('/*', (req, res) => {
    renderPage('./404.html', res);
})

app.listen(port, () => {
    console.log(`App listen in port ${port}`);
})