const path = require('path')
const express = require('express')
const db = require('./db')

const app = express()

const port = 8000

const api = require('./api')

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
// })

async function start() {
  await db.verifyConnection()
  console.log('DB connection verified')

  const PORT = process.env.PORT || 8000
  app.listen(port, () => {
    console.log(
      `Server succesfully started on port ${port}.`
    )
  })
}

start()

