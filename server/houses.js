'use strict'

const db = require('APP/db')
const User = db.model('users')
const House = db.model('houses')

module.exports = require('express').Router()
	.get('/:id', (req, res, next) =>
		User.findAll({
      where:{
        house_id: req.params.id
      }
    })
		.then(users => res.json(users))
		.catch(next))
