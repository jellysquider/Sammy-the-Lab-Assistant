const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 1750

const app = express();

// use absolute path /css/custom.css (with a trailing slash for loading static files on the client side
app.use(express.static(path.join(__dirname, 'public')));
app.set('/views', path.join(__dirname, './views/'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('index.ejs');
});

app.get('/', (req, res) => res.render('pages/index.ejs'));
app.get('/home', (req, res) => res.render('pages/index.ejs'));

// app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


exports.app = functions.https.onRequest(app);
