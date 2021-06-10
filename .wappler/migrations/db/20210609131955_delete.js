
exports.up = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.dropColumn('navinfo');
      table.dropColumn('navnotes');
      table.dropColumn('navdownloads');
      table.dropColumn('navassignments');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('nav-click', function (table) {
      table.integer('navinfo');
      table.integer('navnotes').defaultTo('2');
      table.integer('navdownloads').defaultTo('3');
      table.integer('navassignments').defaultTo('4');
    })
};
