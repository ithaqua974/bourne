let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let ejs = require('ejs');
let fs = require('fs');

let app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let port = 3000;

app.listen(port, () => {
    console.log('Server started on port http://localhost:' + port + '/');
});

let indexRouter = require('./routes/indexRoute');

app.use('/', indexRouter);