const Router = require('express-promise-router')

const router = new Router()

// router.get('/create-report', async (req, res) => {
//     res.send('hello kian is the best babesie')
//   })

// router.post('/create-report', (req,res) => res.send(' received a post request'))


router.post('/create-report', async (req, res) => {
    res.send(' received a post request from andrew')
  })


// app.post('/create-report', (req,res) => res.send(' received a post request'))

module.exports = router