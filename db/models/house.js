'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const House = db.define('houses', {
  name: Sequelize.STRING
})

module.exports = House
