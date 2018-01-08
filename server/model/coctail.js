var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var CoctailsSchema = new Schema({
 name: String,
 components: Array,
 recipe: String,
 createdAt: Date,
 imgSrc: String
});
//export our module to use in server.js
module.exports = mongoose.model('Coctail', CoctailsSchema);
