const Router = require('express-promise-router')
const bodyParser = require('body-parser')
const report = require('./report')
// const boss = require('./boss')

const router = new Router()
router.use(bodyParser.json())

router.use('/report', report)
// router.use('/boss', boss)

module.exports = router