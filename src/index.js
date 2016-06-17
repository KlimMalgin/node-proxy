
import express from 'express';
import cfg from './config'

let app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(cfg.port, cfg.host, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> Listening on http://%s:%s/.', cfg.host, cfg.port);
    }
});