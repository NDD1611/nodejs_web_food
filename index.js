import express from 'express'
const app = express()
//const port = 4000
import path from 'path'
import cors from 'cors'
import connect from './src/database/connect.js'
import route from './src/route.js'


// app.use(express.static(path.join(__dirname, 'build')));
// console.log(__dirname)
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


connect();

app.use(cors())

//route
route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT || 3000)