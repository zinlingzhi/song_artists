const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // or 'pg' for PostgreSQL

const app = express();
app.use(bodyParser.json());

// Setup database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ilovemom123*()O',
    database: 'test'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

// Fetch all songs
app.get('/songs', (req, res) => {
    db.query('SELECT * FROM songs', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Fetch a specific song
app.get('/songs/:id', (req, res) => {
    db.query('SELECT * FROM songs WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update song details
app.put('/songs/:id', (req, res) => {
    const { title, artist } = req.body;
    db.query('UPDATE songs SET title = ?, artist = ? WHERE id = ?', [title, artist, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Song updated!' });
    });
});

// Delete a song
app.delete('/songs/:id', (req, res) => {
    db.query('DELETE FROM songs WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Song deleted!' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});