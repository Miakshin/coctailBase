var express =  require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Coctail = require('./model/coctail');

const app = express();

mongoose.connect('mongodb://admin:admin@ds251985.mlab.com:51985/coctails');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('It is works');
})
app.get('/coctails', function(req, res) {
 //looks at our Comment Schema
 Coctail.find(function(err, coctails) {
 if (err)
 res.send(err);
 //responds with a json object of our database comments.
 res.json(coctails)
 });
 })
app.post('/addcoctail', function(req, res){
 var coctail = new Coctail();
 //body parser lets us use the req.body
 coctail.name = req.body.name;
 coctail.recipe = req.body.recipe;
 coctail.save(function(err) {
 if (err)
 res.send(err);
 res.json({ message: 'Coctail successfully added!' });
 });
 })

const server = app.listen(3001, () => {
    console.log(`Server is up and running on port 3001`);
});
