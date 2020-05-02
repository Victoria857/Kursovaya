exports.up = function (knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("id").unsigned().primary();
    table.string("card_number", 16).notNull();
    table.decimal("card_cvv", 5, 2).notNull();
    table.string("card_owner", 50).notNull();
    table.decimal("card_cash", 5, 2).notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
