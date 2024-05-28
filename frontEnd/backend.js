const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const pgp = require('pg-promise')();
const db = pgp('jdbc:postgresql://db-postgresql-nyc3-62213-do-user-15735538-0.c.db.ondigitalocean.com:25060/defaultdb');

const grid = document.getElementById("products_grid");

grid.addEventListener("loadstart", function () {
    app.get('/api/products', (req, res) => {
        db.any('SELECT * FROM products')
            .then(data => {
                res.json(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
                res.json({ error: 'An error occurred while fetching products' });
            });
    });
})
