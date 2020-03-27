const express = require("express");

const Quotes = require("./users/usersModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/quotes", (req, res) => {
  Quotes.getAll()
    .then(quotes => {
      res.status(200).json(quotes);
    })
    .catch(err => res.status(500).json({ message: "Error retrieving quotes" }));
});

server.post("/quotes", (req, res) => {
  const newQuote = req.body;
  res.status(201).json(newQuote);
});

module.exports = server;
