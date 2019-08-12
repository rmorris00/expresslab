const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();

const routes = require('./routes');

server.use(cors());
server.use("/", routes);

server.listen(8000, (err) => {
    console.log("running server");
});