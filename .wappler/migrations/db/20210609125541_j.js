
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('value', 'navinfo');
      table.integer('navinfo', 255).defaultTo('1').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('navinfo', 'value');
      table.integer('value', 255).defaultTo('').alter();
    })
};
