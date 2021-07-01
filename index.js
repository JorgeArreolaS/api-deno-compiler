"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/code"));
app.listen(PORT, function () { return console.log("api on http://localhost:" + PORT); });
