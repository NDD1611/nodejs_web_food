import express from 'express'
import bodyParser from 'body-parser'
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
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connect();

app.use(cors())

route(app);

app.listen(process.env.PORT || 4000)