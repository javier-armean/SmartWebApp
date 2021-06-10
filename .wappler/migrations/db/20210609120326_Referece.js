
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('test').unsigned();
      table.foreign('test').references('value').inTable('nav-click');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropForeign('test');
      table.dropColumn('test');
    })
};
