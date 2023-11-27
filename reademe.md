# Song API

## Setup
- Install Node.js and MySQL (or PostgreSQL).
- Set up the database and tables.
- Create Table following commands:
```
CREATE TABLE songs (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    artist VARCHAR(255)
);

CREATE TABLE artists (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE song_artists (
    song_id INT,
    artist_id INT,
    FOREIGN KEY (song_id) REFERENCES songs(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);
```

## Running the API
- Install dependencies: `npm install`.
- Start the server: `node index.js`.