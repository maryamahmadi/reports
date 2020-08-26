const Router = require('express-promise-router')
const db = require('../db')
// const { processError } = require('./utils')

const router = new Router()

router.get('/', async (req, res) => {
  // http://localhost:8000/api/users
  try {
    let result = await db.query(
      `select id, username, name, user_role, email
        from users where user_role='employee';`
    )
    res.json({ data: result.rows.map(convertDbRowToUser) })
  } catch (e) {
    res.send('error')
    // return processError(e, res)
  }
})

function convertDbRowToUser(row) {
  return {
    id: row.id,
    username: row.username,
    name: row.name,
    userRole: row.user_role,
    password: row.password,
    email: row.email,
  }
}

module.exports = router
