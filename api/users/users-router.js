const express = require("express");
const app = express();

const db = require('../../data/db');
app.use(express.json());

    app.post('/register', (req, res) => {
        const { username, password} = req.body;
        const user = { username, password}
        
        db.insert(user)
        .then(saved => {
            res.status(200).json(saved)
        })
        .catch(err => {
            res.status(500).json({ message: `something went wrong, ${err.message}`});
        })
    });

// function getUser(app) {
    app.get('/', (req, res) => {
        db.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ message: `something went wrong, ${err.message}`});
        })
    })
// }


module.exports = app; //{postRegister, getUser};
