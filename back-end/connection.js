import mysql from 'mysql'

export const connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'cargoapp'})