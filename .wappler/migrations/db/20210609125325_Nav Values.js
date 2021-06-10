
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('value', 'nav.info');
      table.integer('nav.info', 255).defaultTo('1').alter();
      table.integer('nav.notes').defaultTo('2');
      table.integer('nav.downloads').defaultTo('3');
      table.integer('nav.assignments');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('nav.info', 'value');
      table.integer('value', 255).defaultTo('').alter();
      table.dropColumn('nav.notes');
      table.dropColumn('nav.downloads');
      table.dropColumn('nav.assignments');
    })
};
