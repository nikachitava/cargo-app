import { connection } from '../connection.js';

export const getServices = (req, res) => {
    const query = 'SELECT * FROM services';
    connection.query(query, (err, data) => {
        if (err) {
            console.error('Error fetching services:', err);
            return res.status(500).json(err);
        }
        return res.json(data);
    });
};


