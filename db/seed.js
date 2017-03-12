const db = require('APP/db')

const seedHouses = () => db.Promise.map([
  {name: 'Gryffindor'},
  {name: 'Hufflepuff'},
  {name: 'Ravenclaw'},
  {name: 'Slytherin'},
], house => db.model('houses').create(house))

const seedUsers = () => db.Promise.map([
  {name: 'Hermione Granger', email: 'hermione@hogwarts.com', password: '1234', house_id: 1, points:10},
  {name: 'Harry Potter', email: 'potter@hogwarts.com', password: '1234', house_id: 1, points:10},
  {name: 'Luna Lovegood', email: 'luna@hogwarts.com', password: '1234', house_id: 3, points:10},
  {name: 'Severus Snape', email: 'snape@hogwarts.com', password: '1234', house_id: 4, points:10},
  {name: 'Nymphadora Tonks', email: 'tonks@hogwarts.com', password: '1234', house_id: 2, points:10}
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedHouses)
  .then(houses => console.log(`Seeded ${houses.length} houses OK`))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
