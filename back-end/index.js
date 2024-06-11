import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()

import {connection} from './connection.js'

import authRoutes from './routes/auth.js'

const PORT = 3000

/* Middlewares */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
      origin: "http://localhost:5173",
  })
);
app.use(cookieParser())

app.use("/auth", authRoutes)


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