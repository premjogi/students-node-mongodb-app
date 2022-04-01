const express = require("express");
const path = require("path");
const handleBars = require("handlebars");
const exphbs = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json({'hello':`<h2>Welcome to Node.JS ${req.method}</h2>`})
});

app.set('views', path.join(__dirname,'/views/'));

app.engine('hbs', 
    exphbs.engine({
        handlebars:allowInsecurePrototypeAccess(handleBars),
        extname:'hbs', 
        defaultLayout:'MainLayout',
        layoutsDir:__dirname + '/views/layouts/'
    })
);

app.set('view engine', 'hbs');

app.listen(8080, () => {
  console.log("listening on port http://localhost:8080");
});
