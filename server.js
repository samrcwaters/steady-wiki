const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

const app = express();

/* Enable cors for testing purposes */
var cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3001;

const pagesDir = (__dirname + "/" + "pages");

app.get('/api/pages', (req, res) => {
    fs.readdir(pagesDir, function (err, files) {
        if (err) {
            res.json(err);
        }
        /* Removes 3-character file extension from the end of filename */
        files = files.map((e) => {
            let endInd = e.indexOf('.');
            e = e.substr(0, endInd);
            return e;
        });
        res.send(files);
    });    
});

app.get('/api/pages/:pagename', (req, res) => {
    const filepath = pagesDir + "/" + req.params.pagename + '.txt';
    fs.readFile(filepath, 'utf8', function(err, content) {
        if (err) {
            res.send(err);
        }
        res.json({
            content: content,
            title: req.params.pagename
        });
    });
});

const server = http.createServer(app);

server.listen(port, () => console.log('Listening for requests on port 3001'));