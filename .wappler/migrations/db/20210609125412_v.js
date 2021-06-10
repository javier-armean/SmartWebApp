
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('value', 'navinfo');
      table.integer('navinfo', 255).defaultTo('1').alter();
      table.integer('navnotes').defaultTo('2');
      table.integer('navdownloads').defaultTo('3');
      table.integer('navassignments').defaultTo('4');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.renameColumn('navinfo', 'value');
      table.integer('value', 255).defaultTo('').alter();
      table.dropColumn('navnotes');
      table.dropColumn('navdownloads');
      table.dropColumn('navassignments');
    })
};
