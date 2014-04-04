var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Order;

var Schema = mongoose.Schema;

var orderSchema = new Schema({
  name: String,
  address: String,
  method: String,
  creditCard: Number,
  expiration: String
})

Order = mongoose.model('Order', orderSchema)