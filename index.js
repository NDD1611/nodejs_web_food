import express from 'express'
const app = express()
const port = 4000
import path from 'path'
import connect from './src/database/connect.js'
import route from './src/route.js'


connect();

//route
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})