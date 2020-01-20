const express = require('express');
// project router
const server = express();

server.use(express.json());
// server to use project router

module.exports = server;