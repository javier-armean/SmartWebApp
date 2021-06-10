
exports.up = function (knex) {
    return knex.schema
        .table('nav-click', function (table) {
            table.integer('value', 65535).alter();
        })
};

exports.down = function (knex) {
    return knex.schema
        .table('nav-click', function (table) {
            table.text('value', 65535).alter();
        })
};
