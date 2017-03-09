const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'Hermione Granger', email: 'hermione@hogwarts.com', password: '1234'},
  {name: 'Luna Lovegood', email: 'luna@hogwarts.com', password: '1234'},
  {name: 'Severus Snape', email: 'snape@hogwarts.com', password: '1234'},
  {name: 'Nymphadora Tonks', email: 'tonks@hogwarts.com', password: '1234'}
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
