exports.up = function(knex) {
  return knex.schema.createTable("quotes", tbl => {
    tbl.increments();

    tbl.string("quote", 264).notNullable();
    tbl.string("author", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("quotes");
};
