const Router = require('express-promise-router')
const bodyParser = require('body-parser')
const reports = require('./reports')
const users = require('./users')

const router = new Router()
router.use(bodyParser.json())

router.use('/reports', reports)
router.use('/users', users)

module.exports = router
