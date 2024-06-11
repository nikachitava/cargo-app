import { connection } from '../connection.js'
import jwt from 'jsonwebtoken'

export const singup = (req, res) => {
    const {name, surname, email, password} = req.body;

    const query = "SELECT * from users WHERE email = ?";

    connection.query(query, [email], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json({message: "This email already in use"})

        const query = "INSERT INTO users (`name`, `surname`, `email`, `password`) VALUES (?,?,?,?)";
        connection.query(query, [name, surname, email, password], (err) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json({message: "User has been created."}) 
        })
    })

}

export const login = (req, res) => {

    const {email} = req.body;

    const query = "SELECT * from users WHERE email = ?";

    connection.query(query, [email], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(400).json({message: "That user not found"})

        if(req.body.password !== data[0].password) {
            return res.status(400).json({message: "Wrong email or password"})
        }

        const token = jwt.sign({id: data[0].id}, "secretkey")

        const {password, ...others} = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    })
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has beed logged out")
}