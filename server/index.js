const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.listen(PORT, () => {
  console.log(`Server is running on port 3001`)
})