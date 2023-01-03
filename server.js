// Only for making socket.io and express servers.
const express = require("express");
const helmet = require("helmet");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { PORT } = require("./constants");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(helmet());

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log("Server listening @", PORT);
});

const io = new Server(httpServer);

module.exports = {
  app,
  io,
};
