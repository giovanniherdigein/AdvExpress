var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtiestSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

// Virtual for author's full name
ArtiestSchema
.virtual('name')
.get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
ArtiestSchema.virtual('lifespan').get(function() {
  var lifetime_string = '';
  if (this.date_of_birth) {
    lifetime_string = DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED);
  }
  lifetime_string += ' - ';
  if (this.date_of_death) {
    lifetime_string += DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
  }
  return lifetime_string;
});

// Virtual for author's URL
ArtiestSchema
.virtual('url')
.get(function () {
  return '/catalog/artiest/' + this._id;
});

//Export model
module.exports = mongoose.model('Artiest', ArtiestSchema);
