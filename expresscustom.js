const express = require('express');

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


function logMethod(req, res, next) {
    console.log(`Method type ${req.method} called`);
    console.log(`  Protocol: ${req.protocol} (secure: ${req.secure}, HTTP Version: ${req.httpVersion})`);
    console.log(`  Hostname: ${req.hostname}, IP: ${JSON.stringify(req.socket._peername)}`);
    console.log(`  Original URL: ${req.originalUrl}`)
    console.log(`  Body:         ${JSON.stringify(req.body)}`);
    console.log(`  Headers:      ${JSON.stringify(req.headers)}`);
    console.log(`  Query String: ${JSON.stringify(req.query)}`);

    next();
}

function ex()
{

    app.get('*', logMethod);
    app.post('*', logMethod);
    app.options('*', logMethod);

    return app;
}

module.exports =  ex;
