/*jslint node: true, nomen: true */

'use strict';

var express = require('express'),
    app = express();

app.configure(function () {
    app.use(express['static'](__dirname));
});

app.listen(3000);
