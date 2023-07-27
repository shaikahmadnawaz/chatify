import express from "express";
import { Socket } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Socket(server);

app.use(express.json());

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("message", (message) => {
    console.log(message);
  });
});
