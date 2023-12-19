"use strict";
const express = require("express");
const app = express();
const port = 3000;
app.get("/", (_req, res) => {
    res.send("hi there, you should not be here");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on port ${port}`);
});
console.log("hi");
