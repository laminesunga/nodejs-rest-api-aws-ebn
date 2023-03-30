const services = require('../services/data')

const routes = require ('express').Router()

routes.get('/data',services)
routes.get('/')


module.exports = routes

