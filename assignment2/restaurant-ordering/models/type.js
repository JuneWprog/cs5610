var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypeSchema = new Type({
    name: {type: String, required: true, minLength: 3, maxLength: 100}
});

// Virtual for this Type instance URL.
TypeSchema
.virtual('url')
.get(function () {
  return '/menu/type/'+this._id;
});

// Export model.
module.exports = mongoose.model('Genre', GenreSchema);
