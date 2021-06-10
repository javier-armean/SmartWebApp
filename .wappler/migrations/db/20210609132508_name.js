
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('navstate', 'navstatedb');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('navstatedb', 'navstate');
    })
};
