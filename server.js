const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<div style="height:100vh;display:flex;align-items:center;justify-content:center;"><h1 style="color:#999;">Freecodecamp Timestamp API</h1></div>')
})

app.get('/:input', (req, res) => {
  const { input } = req.params
  
  if (isTimestamp(input)) {
    res.json({
      unix: +input,
      natural: convertTimestamp(+input)
    })
  } else if (Date.parse(input)) {
    res.json({
      unix: Date.parse(input),
      natural: input
    })
  } else {
    res.json({
      unix: null,
      natural: null
    })
  }

})

app.listen(port)

function isTimestamp (str) {
  return !isNaN(str)
}

function convertTimestamp (value) {
  const date = new Date(value)
  return date.toDateString()
}
