import { connection } from "../connection.js";

export const getCountries = (req, res) => {
    const query = 'SELECT * from countries';
    connection.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching countries:', err);
            return res.status(500).json(err);
        }
        return res.json(data);
    })
}