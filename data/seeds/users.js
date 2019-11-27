exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          username: 'SamwiseGamgee',
          password: 'test',
        },
        {
          username: 'FrodoBaggins',
          password: 'test',
        },
      ]);
    });
};
