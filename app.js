'use strict';

const express = require('express');
const app = express();

app.length('/', function(req, res) {
    res.send('Hello!!!!');
});

app.listen(8082);

module.exports.getApp = app;