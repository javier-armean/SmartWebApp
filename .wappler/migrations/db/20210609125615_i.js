
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('value', 'navinfo');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('navinfo', 'value');
    })
};
