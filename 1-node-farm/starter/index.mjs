import fs from 'fs';
import http from 'http';
import url from 'url';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
        const dataObj = JSON.parse(data);
        

const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Overview page
    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'content-type': 'text/html'} );
        res.end(tempOverview);


    // Product page
    } else if (pathName === '/product') {
        res.writeHead(200, {'content-type': 'text/html'} );
        res.end(tempProduct);

    // API
    } else if (pathName === '/api') {
        res.writeHead(200, {'content-type': 'application-json'} );
        res.end(data);

    // Not found
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('<h1>page not found</h1>');
    }

});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening to port 8000');
});