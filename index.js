import express from 'express'
const app = express()
//const port = 4000
import path from 'path'
import cors from 'cors'
import connect from './src/database/connect.js'
import route from './src/route.js'


connect();

app.use(cors())

//route
route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT || 3000)