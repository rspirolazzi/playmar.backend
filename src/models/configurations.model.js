// configurations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const configurations = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true, enum:['String', 'Number', 'Boolean', 'Date'] },
    value: { type: String, },
    enabled: { type: Boolean},
  }, {
    timestamps: true
  });

  return mongooseClient.model('configurations', configurations);
};
