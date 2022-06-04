var mongoose = require('mongoose');
const { DateTime } = require("luxon");  //for date handling

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  
});

// Virtual for client "full" name.
ClientSchema.virtual('name').get(function() {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for this client instance URL.
ClientSchema.virtual('url').get(function() {
  return '/order/client/' + this._id;
});

ClientSchema.virtual('contact').get(function() {
  var contact_string = 'phone: ';
  if (this.phone_number) {
    contact_string += this.phone_number;
  }
  contact_string += ' address: ';
  if (this.address) {
    contact_string += this.address;
  }
  return contact_string;
});

ClientSchema.virtual('phone').get(function() {
  return this.phone_number;
});

ClientSchema.virtual('address').get(function() {
  return this.address;
});

// Export model.
module.exports = mongoose.model('Client', ClientSchema);

