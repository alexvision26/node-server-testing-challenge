const db = require("../data/dbConfig");

module.exports = {
  getAll,
  getById
};

function getAll() {
  return db("quotes");
}

function getById(id) {
  return db("quotes")
    .where({ id })
    .first();
}
