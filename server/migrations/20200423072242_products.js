exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").unsigned().primary();
    table.string("product_name", 50).notNull();
    table.decimal("product_price", 5, 2).notNull();
    table.string("product_image", 50).notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
