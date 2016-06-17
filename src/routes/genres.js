
import express from 'express';

let genres = express.Router();

genres.get('/genres', (req, res) => {
    res.send({some: 'value'});
});

export default genres;