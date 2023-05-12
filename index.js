const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const recipes = require('./chef.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Drago')
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})

app.get('/recipes/:genre', (req, res) => {
    const genre = req.params.genre;
    const selectedChef = recipes.filter(n => n.genre === genre);
    res.send(selectedChef);
})

app.get('/recipes/:genre/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) { res.send(recipes) }
    else {
        const selectedChef = recipes.find(n => parseInt(n.id) === id);
        res.send(selectedChef);
    }

})

app.listen(port, () => {
    console.log('glsk', port);
})