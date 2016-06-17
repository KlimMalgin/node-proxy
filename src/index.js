
import express from 'express';

let app = express();
let host = process.env.IP;
let port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, host, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> Listening on http://%s:%s/.', host, port);
    }
});