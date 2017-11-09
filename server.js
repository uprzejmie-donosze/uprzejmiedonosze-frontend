const express = require('express');
const request = require('request');
const path = require('path');
const port = process.env.PORT || 8080;
const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000';
const app = express();

app.use(express.static(__dirname));
app.use('/api', (req, res) => {
    req.pipe(request(backendUrl + '/api' + req.url)).pipe(res);
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.info('Server started');
