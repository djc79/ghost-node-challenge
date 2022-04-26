// const express = require('express')
const express = require('./expresscustom')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.send({'Hello': 'World'})
})

app.get('/items/:item_id', (req, res) => {
  res.send({'item_id': req.params.item_id})
})

app.post('/items', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
