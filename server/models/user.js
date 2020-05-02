const db = require("../db/connection");

const User = db.Model.extend({
  tableName: "users",
  hasSecurePassword: true,
});

module.exports = User;
