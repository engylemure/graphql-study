exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', t => {
    t.uuid('id').primary()
    t.text('name').notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('category')
}
