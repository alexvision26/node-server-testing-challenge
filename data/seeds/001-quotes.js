exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quotes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("quotes").insert([
        {
          id: 1,
          quote:
            "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
          author: "Benjamin Franklin"
        },
        {
          id: 2,
          quote:
            "It is during our darkest moments that we must focus to see the light.",
          author: "Aristotle"
        },
        {
          id: 3,
          quote: "Whoever is happy will make others happy too.",
          author: "Anne Frank"
        }
      ]);
    });
};
