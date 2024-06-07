import express from 'express';
import {connection} from './connection.js'
const app = express()
const PORT = 3000

/* Middlewares */
app.use(express.json());

app.get('/', (req, res) => {
    const query = "SELECT * from roles";
    connection.query(query, (err, data) => {
        if(err) throw err;
        res.json(data)
    })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

connection.connect((err) => {
  if(err) {
    console.log("Error connecting to data", err)
    return;
  } else {
    console.log("Dabatabase connected successfully")
  }
})