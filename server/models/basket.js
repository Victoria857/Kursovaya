const db = require("../database");

const Basket = db.Model.extend({
  tableName: "basket",
});

module.exports = Basket;
