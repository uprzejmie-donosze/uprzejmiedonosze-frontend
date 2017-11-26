const express = require('express');
const request = require('request');
const path = require('path');
const port = process.env.PORT || 8080;
const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000';
const app = express();

const publicDir = `${__dirname}/public`;
app.use(express.static(publicDir));
app.use('/api', (req, res) => {
    req.pipe(request(backendUrl + '/api' + req.url)).pipe(res);
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicDir, 'index.html'));
});

app.listen(port);
console.info('Server started at port', port);
