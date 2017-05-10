const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    test: 'test'
  })
})

app.listen(3000)
