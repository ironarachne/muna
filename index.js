"use strict";
var dwarfNameGenerator = require("./modules/names/races/dwarf");
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
    res.send("MUNA!");
});
app.get("/dwarf/", function (req, res) {
    var names = dwarfNameGenerator.generate(10);
    res.send(names);
});
app.get("/dwarf/:seed", function (req, res) {
    res.send("random dwarf names with seed", req.params);
});
app.listen(port, function () {
    console.log("MUNA listening on port ".concat(port));
});
