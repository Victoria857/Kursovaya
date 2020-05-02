const db = require("../db/connection");

const Cards = db.Model.extend({
  tableName: "cards",
});

module.exports = Cards;
