const express = require('express');
const app = express();

const mysql = require('mysql2')

const PORT = process.env.PORT || 3050

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',
        password:'Holiday101',
        database: 'movies_db'
    },

)

app.use(express.json())

app.get('/api/movies', (req, res) => {
    //res.json('unimplemented')
    
    db.query('SELECT * FROM movie_names', function (err, results ) {
        if (err) { 
            console.log(err)
            res.status(404);
            return
        }
        res.json(results)
    })
})

app.get('/api/movie_reviews', (req, res) => {
    //res.json('unimplemented')
    
    db.query('SELECT * FROM movie_reviews', function (err, results ) {
        if (err) { 
            console.log(err)
            res.status(404);
            return
        }
        res.json(results)
    })
})

app.POST('/api/add_movies', (req, res) => {
    
    const {movie} = req.body
    
    db.query('SELECT * FROM movie_names', function (err, results ) {
        if (err) { 
            console.log(err)
            res.status(404);
            return
        }
        res.json(results)
    })
})

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`)
} )