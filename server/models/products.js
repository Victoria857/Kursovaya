const db = require("../database");

const Products = db.Model.extend({
  tableName: "products",
});

module.exports = Products;
