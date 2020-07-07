const express = require('express')
const app = express()
const port = 8000

const api = require('./api')

app.use('/api', api)

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/create-report', (req,res) => res.send(' received a post request'))
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })




app.listen(port, () => console.log(`Example app listening on port ${port}!`))